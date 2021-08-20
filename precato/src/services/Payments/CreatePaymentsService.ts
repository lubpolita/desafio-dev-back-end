import { inject, injectable } from 'tsyringe'
import { IPaymentsRepository } from '../../repositories/Payments/IPaymentsRepository'
import { ICreatePaymentsRequestDTO } from '../../dtos/CreatePaymentsDTO'
import { Payments } from '../../entities/Payments'
// regras de negocio
@injectable()
export default class CreatePaymentsService {
  constructor (
    @inject('PaymentsRepository')
    private readonly paymentsRepository: IPaymentsRepository
  ) {
  }

  public async execute (data: ICreatePaymentsRequestDTO): Promise<Payments> {
    const payments = await this.paymentsRepository.create(data)
    return payments
  }
}
