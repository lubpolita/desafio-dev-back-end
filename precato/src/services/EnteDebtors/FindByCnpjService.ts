import { inject, injectable } from 'tsyringe'
import { EnteDebtor } from '../../shared/typeorm/entities/EnteDebtor'
import { IEnteDebtorRepository } from '../../shared/typeorm/repositories/EnteDebtor/IEnteDebtorRepository'

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
