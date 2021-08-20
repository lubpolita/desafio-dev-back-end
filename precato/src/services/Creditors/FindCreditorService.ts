import { inject, injectable } from 'tsyringe'
import { ICreditorsRepository } from '../../repositories/Creditor/ICreditorsRepository'
import { Creditor } from '../../entities/Creditor'

@injectable()
export default class FindCreditorService {
  constructor (
    @inject('CreditorRepository')
    private readonly CreditorRepository: ICreditorsRepository
  ) {

  }

  public async execute (data: string): Promise<Creditor | undefined> {
    const creditor = await this.CreditorRepository.findbyId(data)
    return creditor
  }
}
