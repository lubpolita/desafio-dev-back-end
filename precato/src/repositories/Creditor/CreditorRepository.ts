import { Repository, getRepository } from 'typeorm'
import { Creditor } from '../../entities/Creditor'
import { ICreateCreditorRequestDTO } from '../../dtos/CreateCreditorDTO'
import { ICreditorsRepository } from './ICreditorsRepository'

export default class CreditorRepository implements ICreditorsRepository {
  private readonly ormRepository: Repository<Creditor>
  constructor () {
    this.ormRepository = getRepository(Creditor)
  }

  public async create (data: ICreateCreditorRequestDTO): Promise<Creditor> {
    const creditor = this.ormRepository.create(data)
    await this.ormRepository.save(creditor)
    return creditor
  }

  public async findbyId (id: string): Promise<Creditor | undefined> {
    const creditor = await this.ormRepository.findOne(id)
    return creditor
  }

  public async findAll (): Promise<Creditor[] | undefined> {
    const creditors = await this.ormRepository.find()
    return creditors
  }
}
