import { Request, Response } from 'express'
import 'reflect-metadata'
import { container } from 'tsyringe'
import CreateCreditorService from '../services/Creditors/CreateCreditorService'
import FindCreditorService from '../services/Creditors/FindCreditorService'
import FindAllCreditorService from '../services/Creditors/FindAllCreditorService'
import { Creditor } from '../entities/Creditor'
import FindByCpfService from '../services/Creditors/FindByCpfService'
export class CreditorController {
  public async create (request: Request, response: Response): Promise<void> {
    try {
      const createCreditor = container.resolve(CreateCreditorService)
      const creditor = await createCreditor.execute(request.body)
      console.dir(creditor)
      return response.status(201).json(creditor)
    } catch (err) {
      console.error(err)
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findByCpf (request: Request, response: Response): Promise <Creditor | undefined> {
    try {
      const findCreditor = container.resolve(FindByCpfService)
      const creditor = await findCreditor.execute(request.body)
      console.dir(creditor)
      return response.status(201).json(creditor)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findById (request: Request, response: Response): Promise <Creditor | undefined> {
    try {
      const findCpf = container.resolve(FindCreditorService)
      const creditor = await findCpf.execute(request.body)
      console.dir(creditor)
      return response.status(201).json(creditor)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findAll (request: Request, response: Response): Promise <void> {
    try {
      const findAllCreditor = container.resolve(FindAllCreditorService)
      const creditoArray = await findAllCreditor.execute()
      return response.status(201).json(creditoArray)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
