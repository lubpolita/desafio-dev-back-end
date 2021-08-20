import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateEnteDebtorService from '../services/EnteDebtors/CreateEnteDebtorService'
import FindAllEnteDebtorService from '../services/EnteDebtors/FindAllEnteDebtor'
export class EnteDebtorController {
  public async create (request: Request, response: Response): Promise<void> {
    try {
      const createEnteDebtor = container.resolve(CreateEnteDebtorService)
      const enteDebtor = await createEnteDebtor.execute(request.body)
      console.dir(enteDebtor)
      return response.status(201).json(enteDebtor)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findAll (request: Request, response: Response): Promise <void> {
    try {
      const findAllEnteDebtor = container.resolve(FindAllEnteDebtorService)
      const enteDebtorArray = await findAllEnteDebtor.execute()
      return response.status(201).json(enteDebtorArray)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
