import { inject, injectable } from 'tsyringe'
import { EnteDebtor } from '../../entities/EnteDebtor'
import { IEnteDebtorRepository } from '../../repositories/EnteDebtor/IEnteDebtorRepository'

@injectable()
export default class FindEnteDebtorService {
  constructor (
    @inject('EnteDebtorRepository')
    private readonly enteDebtorRepository: IEnteDebtorRepository
  ) {

  }

  public async execute (id: string): Promise<EnteDebtor | undefined> {
    const enteDebtor = await this.enteDebtorRepository.findbyId(id)
    return enteDebtor
  }
}
