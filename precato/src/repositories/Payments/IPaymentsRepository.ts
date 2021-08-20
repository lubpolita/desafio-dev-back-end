
import { Payments } from '../../entities/Payments'
import { ICreatePaymentsRequestDTO } from '../../dtos/CreatePaymentsDTO'

export interface IPaymentsRepository {
  findbyId: (id: string) => Promise <Payments | undefined>
  create: (data: ICreatePaymentsRequestDTO) => Promise <Payments>
  index: () => Promise <Payments[] | undefined>
}
