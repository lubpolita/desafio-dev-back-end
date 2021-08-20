import { Repository, getRepository } from 'typeorm'
import { IEnteDebtorRepository } from './IEnteDebtorRepository'
import { EnteDebtor } from '../../entities/EnteDebtor'
import { ICreateEnteDebtorRequestDTO } from '../../dtos/CreateEnteDebtorDTO'

export default class EnteDebtorRepository implements IEnteDebtorRepository {
  private readonly ormRepository: Repository<EnteDebtor>
  constructor () {
    this.ormRepository = getRepository(EnteDebtor)
  }

  public async create (data: ICreateEnteDebtorRequestDTO): Promise<EnteDebtor> {
    const enteDebtor = this.ormRepository.create(data)
    await this.ormRepository.save(enteDebtor)
    return enteDebtor
  }

  public async findbyId (id: string): Promise<EnteDebtor | undefined> {
    const enteDebtor = await this.ormRepository.findOne({ where: { id } })
    return enteDebtor
  }

  public async findAll (): Promise<EnteDebtor[] | undefined> {
    const enteDebtorArray = await this.ormRepository.find()
    return enteDebtorArray
  }
}
