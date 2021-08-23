import { inject, injectable } from 'tsyringe'
import { Creditor } from '../../entities/Creditor'
import { ICreditorsRepository } from '../../repositories/Creditor/ICreditorsRepository'

@injectable()
export default class FindByCpfService {
  constructor (
    @inject('CreditorRepository')
    private readonly creditorRepository: ICreditorsRepository
  ) {}

  public async execute (cpfString: string): Promise<Creditor | undefined> {
    const cpf = await this.creditorRepository.findByCpf(cpfString)
    return cpf
  }
}
