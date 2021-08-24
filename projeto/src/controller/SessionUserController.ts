import { container } from 'tsyringe'
import SessionUserService from '../services/Users/SessionUserService'
import { Request, Response } from 'express'

export default class SessionUserController {
  public async create (request: Request, response: Response): Promise<Response> {
    try {
      const { username, password } = request.body

      const authenticateUser = container.resolve(SessionUserService)

      const { token, user } = await authenticateUser.execute({ username, password })
      return response.status(201).json({ user, token })
    } catch (err) {
      return response.status(400).json({
        message: err.message
      })
    }
  }
}
