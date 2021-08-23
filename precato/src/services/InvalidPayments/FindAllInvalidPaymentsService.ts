import { inject, injectable } from 'tsyringe'
import { InvalidPayments } from '../../shared/typeorm/entities/InvalidPayments'
import { IInvalidPaymentsRepository } from '../../shared/typeorm/repositories/InvalidPayments/IInvalidPaymentsRepository'

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
