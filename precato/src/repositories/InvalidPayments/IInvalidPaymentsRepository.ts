import { ICreateInvalidPaymentsRequestDTO } from '../../dtos/CreateInvalidPayments'
import { InvalidPayments } from '../../entities/InvalidPayments'
export interface IInvalidPaymentsRepository {
  create: (data: ICreateInvalidPaymentsRequestDTO) => Promise<InvalidPayments>
  findAll: () => Promise<InvalidPayments[] | undefined>
}
