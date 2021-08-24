/*  */import { Request, Response, NextFunction } from 'express'
import { container } from 'tsyringe'
import FindTokerService from '../../../../services/Token/FindTokenService'

export default class Middleware {
  public async middleware (request: Request, response: Response, next: NextFunction): Promise<void> {
    const auth = container.resolve(FindTokerService)

    try {
      // console.log(request.headers.authorization.split(' ')[1])
      await auth.execute(request.headers.authorization.split(' ')[1])
    } catch (error) {
      return response.status(400).json({
        message: error.message
      })
    }
    next()
  }
}
