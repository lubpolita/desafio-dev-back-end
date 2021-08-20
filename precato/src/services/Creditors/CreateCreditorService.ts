import { inject, injectable } from 'tsyringe'
import { Creditor } from '../../entities/Creditor'
import { ICreditorsRepository } from '../../repositories/Creditor/ICreditorsRepository'
import { ICreateCreditorRequestDTO } from '../../dtos/CreateCreditorDTO'
// regras de negocio
@injectable()
export default class CreateCreditorService {
  constructor (
    @inject('CreditorRepository')
    private readonly creditorRepository: ICreditorsRepository
  ) {
  }

  public async execute (data: ICreateCreditorRequestDTO): Promise<Creditor> {
    const creditor = await this.creditorRepository.create(data)
    return creditor
  }
}
