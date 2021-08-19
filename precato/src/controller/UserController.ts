import { getRepository } from 'typeorm'
import { NextFunction, Request, Response } from 'express'
import { User } from '../entities/User'

export class UserController {
  private readonly creditorRepository = getRepository(User)

  // função para achar todos usuarios
  // 200 -> valor padrao para falar que deu certo
  // http response status
  async all (request: Request, response: Response, next: NextFunction): Promise <void> {
    const creditors = await this.creditorRepository.find()
    return response.status(200).json(creditors)
  }

  // encontrar um usuario
  async one (request: Request, response: Response, next: NextFunction): Promise <void> {
    const creditor = await this.creditorRepository.findOne(request.params.id)
    return response.status(200).json(creditor)
  }

  // salvar usuario
  async save (request: Request, response: Response, next: NextFunction): Promise <void> {
    await this.creditorRepository.save(request.body)
    return response.status(200)
  }

  // remover usuario
  async remove (request: Request, response: Response, next: NextFunction): Promise <void> {
    const userToRemove = await this.creditorRepository.findOne(request.params.id)
    if (userToRemove === undefined) return response.status(400)
    await this.creditorRepository.remove(userToRemove)
  }
}
