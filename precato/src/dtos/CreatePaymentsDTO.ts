export interface ICreatePaymentsRequestDTO{
  idCreditor: string
  idEnteDebtor: string
  initialValue: number
  finalValue: number
  data: Date
  status: string
  reason: string
}
