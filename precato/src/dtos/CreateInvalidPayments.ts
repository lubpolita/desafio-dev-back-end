export interface ICreateInvalidPaymentsRequestDTO{
  idRemittance: string
  idCreditor: string
  idEnteDebtor: string
  initialValue: number
  finalValue: number
  data: Date
  status: string
  reason: string
}
