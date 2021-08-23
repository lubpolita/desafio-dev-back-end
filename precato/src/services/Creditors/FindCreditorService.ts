import { inject, injectable } from 'tsyringe'
import { ICreditorsRepository } from '../../shared/typeorm/repositories/Creditor/ICreditorsRepository'
import { Creditor } from '../../shared/typeorm/entities/Creditor'

@injectable()
export default class FindCreditorService {
  constructor (
    @inject('CreditorRepository')
    private readonly CreditorRepository: ICreditorsRepository
  ) {}

  public async execute (data: string): Promise<Creditor | undefined> {
    const creditor = await this.CreditorRepository.findbyId(data)
    return creditor
  }
}
