import { inject, injectable } from 'tsyringe'
import User from '../../entities/User'
import { IUserRepository } from '../../repositories/User/IUserRepository'

@injectable()
export default class FindUserService {
  constructor (
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {

  }

  public async execute (data: string): Promise<User | undefined> {
    const user = await this.userRepository.findByUsername(data)
    return user
  }
}
