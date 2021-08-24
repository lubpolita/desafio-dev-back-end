import { Repository, getRepository } from 'typeorm'
import { Creditor } from '../../entities/Creditor'
import { ICreateCreditorRequestDTO } from '../../../../dtos/CreateCreditorDTO'
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
    const creditor = await this.ormRepository.findOne({ where: { id } })
    return creditor
  }

  public async findByCpf (cpf: string): Promise<Creditor | undefined> {
    const creditor = await this.ormRepository.findOne({ where: { cpf: cpf } })
    return creditor
  }

  public async findAll (): Promise<Creditor[] | undefined> {
    const creditors = await this.ormRepository.find()
    return creditors
  }

  public async checkStatus (id: string): Promise<string> {
    const creditor = await this.ormRepository.findOne({ where: { id } })
    if (creditor === undefined) {
      return 'disapproved'
    }
    const status = creditor.registerStatus
    return status
  }
}
