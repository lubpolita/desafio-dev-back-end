
import { Payments } from '../../entities/Payments'
import { ICreatePaymentsRequestDTO } from '../../../../dtos/CreatePaymentsDTO'

export interface IPaymentsRepository {
  findbyRemittance: (idRemittance: string) => Promise <Payments | undefined>
  create: (data: ICreatePaymentsRequestDTO) => Promise <Payments>
  index: () => Promise <Payments[] | undefined>
}
