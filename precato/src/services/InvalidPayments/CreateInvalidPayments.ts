import { inject, injectable } from 'tsyringe'
import { IInvalidPaymentsRepository } from '../../repositories/InvalidPayments/IInvalidPaymentsRepository'
import { ICreateInvalidPaymentsRequestDTO } from '../../dtos/CreateInvalidPayments'
import { InvalidPayments } from '../../entities/InvalidPayments'

@injectable()
export default class CreateInvalidPaymentsService {
  constructor (
    @inject('InvalidPaymentsRepository')
    private readonly invalidPaymentsRepository: IInvalidPaymentsRepository
  ) {

  }

  public async execute (data: ICreateInvalidPaymentsRequestDTO): Promise<InvalidPayments> {
    const invalidPayments = await this.invalidPaymentsRepository.create(data)
    return invalidPayments
  }
}
