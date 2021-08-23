import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateUserService from '../services/Users/CreateUserService'
import FindAllUserService from '../services/Users/FindAllUserService'
export class UserController {
  async create (request: Request, response: Response): Promise <void> {
    try {
      const createUser = container.resolve(CreateUserService)
      const user = await createUser.execute(request.body)
      return response.status(201).json(user)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }

  public async findAll (request: Request, response: Response): Promise <void> {
    try {
      const findAllUsers = container.resolve(FindAllUserService)
      const userArray = await findAllUsers.execute()
      return response.status(201).json(userArray)
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
