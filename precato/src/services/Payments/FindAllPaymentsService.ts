import { inject, injectable } from 'tsyringe'
import { IPaymentsRepository } from '../../repositories/Payments/IPaymentsRepository'
import { Payments } from '../../entities/Payments'

@injectable()
export default class FindAllPaymentsService {
  constructor (
    @inject('PaymentsRepository')
    private readonly paymentsRepository: IPaymentsRepository
  ) {

  }

  public async execute (): Promise<Payments[] | undefined> {
    const paymentsArray = await this.paymentsRepository.index()
    return paymentsArray
  }
}
