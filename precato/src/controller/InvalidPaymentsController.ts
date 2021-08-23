import { Response, Request } from 'express'
import CreateInvalidPaymentsService from '../services/InvalidPayments/CreateInvalidPayments'
import { container } from 'tsyringe'
import { InvalidPayments } from '../shared/typeorm/entities/InvalidPayments'
import FindAllInvalidPaymentsService from '../services/InvalidPayments/FindAllInvalidPaymentsService'
export class InvalidPaymentsController {
  public async create (request: Request, response: Response): Promise <void> {
    try {
      const createInvalidPayments = container.resolve(CreateInvalidPaymentsService)
      const invalidPayments = await createInvalidPayments.execute(request.body)
      return response.status(201).json(invalidPayments)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findAll (request: Request, response: Response): Promise<InvalidPayments[] | undefined> {
    try {
      const findInvalidPayments = container.resolve(FindAllInvalidPaymentsService)
      const invalidPaymentsArray = await findInvalidPayments.execute()
      return response.status(201).json(invalidPaymentsArray)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
