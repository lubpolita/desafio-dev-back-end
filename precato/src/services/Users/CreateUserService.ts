import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../repositories/User/IUserRepository'
import { ICreateUserRequestDTO } from '../../dtos/CreateUserDTO'
import User from '../../entities/User'
import IHashProvider from '../../providers/IHashProvider'

@injectable()
export default class CreateUserService {
  constructor (
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
    @inject('HashProvider')
    private readonly hashProvider: IHashProvider
  ) {

  }

  public async execute (data: ICreateUserRequestDTO): Promise <User> {
    const passwordHashed = await this.hashProvider.generateHash(data.password)
    const user = await this.userRepository.create({
      ...data,
      password: passwordHashed
    })
    user.password = ''
    return user
  }
}
