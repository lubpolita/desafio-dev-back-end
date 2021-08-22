import { inject, injectable } from 'tsyringe'
import { IPaymentsRepository } from '../../repositories/Payments/IPaymentsRepository'
import { ICreatePaymentsRequestDTO } from '../../dtos/CreatePaymentsDTO'
import { Payments } from '../../entities/Payments'
import { ICreditorsRepository } from '../../repositories/Creditor/ICreditorsRepository'
import { IEnteDebtorRepository } from '../../repositories/EnteDebtor/IEnteDebtorRepository'
import { InvalidPayments } from '../../entities/InvalidPayments'
import { IInvalidPaymentsRepository } from '../../repositories/InvalidPayments/IInvalidPaymentsRepository'
// regras de negocio
@injectable()
export default class CreatePaymentsService {
  constructor (
    @inject('PaymentsRepository')
    private readonly paymentsRepository: IPaymentsRepository,
    @inject('InvalidPaymentsRepository')
    private readonly invalidPaymentsRepository: IInvalidPaymentsRepository,
    @inject('CreditorRepository')
    private readonly creditorsRepository: ICreditorsRepository,
    @inject('EnteDebtorRepository')
    private readonly enteDebtorRepository: IEnteDebtorRepository
  ) {
  }

  public async execute (data: ICreatePaymentsRequestDTO): Promise<Payments | InvalidPayments> {
    const verifyCreditor = await this.creditorsRepository.findbyId(data.idCreditor)
    const verifyEnteDebtor = await this.enteDebtorRepository.findbyId(data.idEnteDebtor)
    const verifyStatusCreditor = (await this.creditorsRepository.checkStatus(data.idCreditor)).toUpperCase()
    const verifyRemittance = await this.paymentsRepository.findbyRemittance(data.idRemittance)

    // regra de negocio 1
    if (verifyStatusCreditor !== 'APROVADO' || verifyCreditor === undefined) {
      data.reason = 'O cadastro do credor não foi aprovado.'
      const invalidPayment = await this.invalidPaymentsRepository.create(data)
      return invalidPayment
    }
    // regra de negocio 2
    if (verifyEnteDebtor === undefined || verifyEnteDebtor == null) {
      data.reason = 'O ID do ente devedor não pode ser identificado.'
      const invalidPayment = await this.invalidPaymentsRepository.create(data)
      return invalidPayment
    }
    // regra de negocio 3
    if (data.initialValue < 0 || data.finalValue < 0) {
      data.reason = 'O valor inicial ou o valor final é menor que 0.'
      const invalidPayment = await this.invalidPaymentsRepository.create(data)
      return invalidPayment
    }

    // regra de negocio 4
    if (data.finalValue >= data.initialValue) {
      data.reason = 'O valor final é maior ou igual ao valor inicial.'
      const invalidPayment = await this.invalidPaymentsRepository.create(data)
      return invalidPayment
    }

    // regra de negocio 5
    if (verifyRemittance !== undefined) {
      data.reason = 'O identificador da remessa já existe em uma solicitação anterior.'
      const invalidPayment = await this.invalidPaymentsRepository.create(data)
      return invalidPayment
    }
    const payments = await this.paymentsRepository.create(data)
    return payments
  }
}
