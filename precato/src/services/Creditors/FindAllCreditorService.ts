import { inject, injectable } from 'tsyringe'
import { Creditor } from '../../entities/Creditor'
import { ICreditorsRepository } from '../../repositories/Creditor/ICreditorsRepository'

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
