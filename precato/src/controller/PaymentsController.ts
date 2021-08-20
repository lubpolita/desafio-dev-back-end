import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreatePaymentsService from '../services/Payments/CreatePaymentsService'
import FindAllPaymentsService from '../services/Payments/FindAllPaymentsService'
export class PaymentsController {
  public async create (request: Request, response: Response): Promise<void> {
    try {
      const createPayments = container.resolve(CreatePaymentsService)
      const payments = await createPayments.execute(request.body)
      console.dir(payments)
      return response.status(201).json(payments)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findAll (request: Request, response: Response): Promise<void> {
    try {
      const findAllPayments = container.resolve(FindAllPaymentsService)
      const paymentsArray = await findAllPayments.execute()
      return response.status(201).json(paymentsArray)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
