import { inject, injectable } from 'tsyringe'
import { EnteDebtor } from '../../entities/EnteDebtor'
import { IEnteDebtorRepository } from '../../repositories/EnteDebtor/IEnteDebtorRepository'

@injectable()
export default class FindByCnpjService {
  constructor (
    @inject('EnteDebtorRepository')
    private readonly enteDebtorRepository: IEnteDebtorRepository
  ) {}

  public async execute (cnpj: string): Promise<EnteDebtor | undefined> {
    const enteDebtor = await this.enteDebtorRepository.findByCnpj(cnpj)
    return enteDebtor
  }
}
