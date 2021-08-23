import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateEnteDebtorService from '../services/EnteDebtors/CreateEnteDebtorService'
import FindAllEnteDebtorService from '../services/EnteDebtors/FindAllEnteDebtor'
import FindEnteDebtorService from '../services/EnteDebtors/FindEnteDebtorService'
import { EnteDebtor } from '../entities/EnteDebtor'
import FindByCnpjService from '../services/EnteDebtors/FindByCnpjService'
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

  public async findById (request: Request, response: Response): Promise <EnteDebtor | undefined> {
    try {
      const findEnteDebtor = container.resolve(FindEnteDebtorService)
      const enteDebtor = await findEnteDebtor.execute(request.body)
      console.dir(enteDebtor)
      return response.status(201).json(enteDebtor)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findByCnpj (request: Request, response: Response): Promise <EnteDebtor | undefined> {
    try {
      const findEnteDebtor = container.resolve(FindByCnpjService)
      const enteDebtor = await findEnteDebtor.execute(request.body)
      return response.status(201).json(enteDebtor)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
