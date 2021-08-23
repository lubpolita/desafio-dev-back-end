import { inject, injectable } from 'tsyringe'
import { IEnteDebtorRepository } from '../../shared/typeorm/repositories/EnteDebtor/IEnteDebtorRepository'
import { EnteDebtor } from '../../shared/typeorm/entities/EnteDebtor'

@injectable()
export default class FindAllEnteDebtorService {
  constructor (
    @inject('EnteDebtorRepository')
    private readonly EnteDebtorRepository: IEnteDebtorRepository
  ) {

  }

  public async execute (): Promise<EnteDebtor[] | undefined> {
    const enteDebtorArray = await this.EnteDebtorRepository.findAll()
    return enteDebtorArray
  }
}
