import { inject, injectable } from 'tsyringe'
import { IEnteDebtorRepository } from '../../repositories/EnteDebtor/IEnteDebtorRepository'
import { ICreateEnteDebtorRequestDTO } from '../../dtos/CreateEnteDebtorDTO'
import { EnteDebtor } from '../../entities/EnteDebtor'
// regras de negocio
@injectable()
export default class CreateEnteDebtorService {
  constructor (
    @inject('EnteDebtorRepository')
    private readonly enteDebtorRepository: IEnteDebtorRepository
  ) {
  }

  public async execute (data: ICreateEnteDebtorRequestDTO): Promise<EnteDebtor> {
    const enteDebtor = await this.enteDebtorRepository.create(data)
    return enteDebtor
  }
}
