
import { Creditor } from '../../entities/Creditor'
import { ICreateCreditorRequestDTO } from '../../dtos/CreateCreditorDTO'

export interface ICreditorsRepository {
  findbyId: (id: string) => Promise <Creditor | undefined>
  create: (data: ICreateCreditorRequestDTO) => Promise <Creditor>
  findAll: () => Promise <Creditor[] | undefined>
  checkStatus: (id: string) => Promise<string>
  findByCpf: (cpf: string) => Promise<Creditor | undefined>
}
