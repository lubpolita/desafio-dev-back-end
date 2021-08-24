import { inject, injectable } from 'tsyringe'
import { Creditor } from '../../shared/typeorm/entities/Creditor'
import { ICreditorsRepository } from '../../shared/typeorm/repositories/Creditor/ICreditorsRepository'

@injectable()
export default class FindAllCreditorService {
  constructor (
    @inject('CreditorRepository')
    private readonly CreditorRepository: ICreditorsRepository
  ) {

  }

  public async execute (): Promise<Creditor[] | undefined> {
    const creditorArray = await this.CreditorRepository.findAll()
    return creditorArray
  }
}
