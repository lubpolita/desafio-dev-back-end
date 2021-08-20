
import { ICreateEnteDebtorRequestDTO } from '../../dtos/CreateEnteDebtorDTO'
import { EnteDebtor } from '../../entities/EnteDebtor'

export interface IEnteDebtorRepository {
  findbyId: (id: string) => Promise <EnteDebtor | undefined>
  create: (data: ICreateEnteDebtorRequestDTO) => Promise <EnteDebtor>
  findAll: () => Promise <EnteDebtor[] | undefined>
}
