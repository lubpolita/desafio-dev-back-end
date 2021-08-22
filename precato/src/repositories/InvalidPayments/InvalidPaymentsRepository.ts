import { IInvalidPaymentsRepository } from './IInvalidPaymentsRepository'
import { Repository, getRepository } from 'typeorm'
import { InvalidPayments } from '../../entities/InvalidPayments'
import { ICreateInvalidPaymentsRequestDTO } from '../../dtos/CreateInvalidPayments'

export default class InvalidPaymentsRepository implements IInvalidPaymentsRepository {
  private readonly ormRepository: Repository<InvalidPayments>
  constructor () {
    this.ormRepository = getRepository(InvalidPayments)
  }

  public async create (data: ICreateInvalidPaymentsRequestDTO): Promise <InvalidPayments> {
    const invalidPayments = this.ormRepository.create(data)
    await this.ormRepository.save(invalidPayments)
    return invalidPayments
  }

  public async findAll (): Promise<InvalidPayments[] | undefined> {
    const invalidPaymentsArray = await this.ormRepository.find()
    return invalidPaymentsArray
  }
}
