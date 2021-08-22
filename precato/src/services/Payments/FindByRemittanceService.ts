import { inject, injectable } from 'tsyringe'
import { IPaymentsRepository } from '../../repositories/Payments/IPaymentsRepository'
import { Payments } from '../../entities/Payments'

@injectable()
export default class FindByRemittanceService {
  constructor (
    @inject('PaymentsRepository')
    private readonly paymentsRepository: IPaymentsRepository
  ) {}

  public async execute (idRemittance: string): Promise<Payments | undefined> {
    const payment = await this.paymentsRepository.findbyRemittance(idRemittance)
    return payment
  }
}
