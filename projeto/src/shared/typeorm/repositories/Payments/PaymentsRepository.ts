import { Repository, getRepository } from 'typeorm'
import { IPaymentsRepository } from './IPaymentsRepository'
import { Payments } from '../../entities/Payments'
import { ICreatePaymentsRequestDTO } from '../../../../dtos/CreatePaymentsDTO'

export default class PaymentsRepository implements IPaymentsRepository {
  private readonly ormRepository: Repository<Payments>
  constructor () {
    this.ormRepository = getRepository(Payments)
  }

  public async create (data: ICreatePaymentsRequestDTO): Promise<Payments> {
    const payments = this.ormRepository.create(data)
    await this.ormRepository.save(payments)
    return payments
  }

  public async findbyRemittance (idRem: string): Promise<Payments | undefined> {
    const payment = await this.ormRepository.findOne({ idRemittance: idRem })
    return payment
  }

  public async index (): Promise<Payments[] |undefined> {
    const paymentsArray = await this.ormRepository.find()
    return paymentsArray
  }
}
