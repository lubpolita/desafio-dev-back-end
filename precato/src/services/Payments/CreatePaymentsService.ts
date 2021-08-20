import { inject, injectable } from 'tsyringe'
import { IPaymentsRepository } from '../../repositories/Payments/IPaymentsRepository'
import { ICreatePaymentsRequestDTO } from '../../dtos/CreatePaymentsDTO'
import { Payments } from '../../entities/Payments'
import { ICreditorsRepository } from '../../repositories/Creditor/ICreditorsRepository'
import { IEnteDebtorRepository } from '../../repositories/EnteDebtor/IEnteDebtorRepository'
// regras de negocio
@injectable()
export default class CreatePaymentsService {
  constructor (
    @inject('PaymentsRepository')
    private readonly paymentsRepository: IPaymentsRepository,
    @inject('CreditorRepository')
    private readonly creditorsRepository: ICreditorsRepository,
    @inject('EnteDebtorRepository')
    private readonly enteDebtorRepository: IEnteDebtorRepository
  ) {
  }

  public async execute (data: ICreatePaymentsRequestDTO): Promise<Payments> {
    const verifyCreditor = await this.creditorsRepository.findbyId(data.idCreditor)
    const verifyEnteDebtor = await this.enteDebtorRepository.findbyId(data.idEnteDebtor)
    const verifyStatusCreditor = await this.creditorsRepository.checkStatus(data.idCreditor)
    if (verifyCreditor === undefined) {
      throw new Error('Esse id de creditor não pode ser identificado.')
    }
    // regra de negocio 1
    if (verifyStatusCreditor !== 'aprovado') {
      throw new Error('Esse cadastro não foi aprovado')
    }
    // regra de negocio 2
    if (verifyEnteDebtor === undefined || verifyEnteDebtor == null) {
      throw new Error('O id do ente devedor não pode ser identificado.')
    }
    // regra de negocio 3
    if (data.initialValue < 0 || data.finalValue < 0) {
      throw new Error('O valor inicial ou final é menor que 0.')
    }
    const payments = await this.paymentsRepository.create(data)
    return payments
  }
}
