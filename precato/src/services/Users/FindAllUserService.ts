import { injectable, inject } from 'tsyringe'
import { IUserRepository } from '../../shared/typeorm/repositories/User/IUserRepository'
import User from '../../shared/typeorm/entities/User'

@injectable()
export default class FindAllUserService {
  constructor (
    @inject('UserRepository')
    private readonly userRepository: IUserRepository
  ) {}

  public async execute (): Promise<User[] | undefined> {
    const usersArray = await this.userRepository.findAll()
    return usersArray
  }
}
