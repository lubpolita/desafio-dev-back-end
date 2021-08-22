import { inject, injectable } from 'tsyringe'
import { InvalidPayments } from '../../entities/InvalidPayments'
import { IInvalidPaymentsRepository } from '../../repositories/InvalidPayments/IInvalidPaymentsRepository'

@injectable()
export default class FindAllInvalidPaymentsService {
  constructor (
    @inject('InvalidPaymentsRepository')
    private readonly invalidPaymentsRepository: IInvalidPaymentsRepository
  ) {}

  public async execute (): Promise<InvalidPayments[] | undefined> {
    const invalidPaymentsArray = await this.invalidPaymentsRepository.findAll()
    return invalidPaymentsArray
  }
}
