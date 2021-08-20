import { Request, Response } from 'express'
import { container } from 'tsyringe'
import CreateUserService from '../services/Users/CreateUserService'
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
}
