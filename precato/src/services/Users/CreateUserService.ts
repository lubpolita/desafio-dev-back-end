import { inject, injectable } from 'tsyringe'
import { IUserRepository } from '../../shared/typeorm/repositories/User/IUserRepository'
import { ICreateUserRequestDTO } from '../../dtos/CreateUserDTO'
import User from '../../shared/typeorm/entities/User'
import IHashProvider from '../../shared/providers/IHashProvider'

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
    const verifyUsername = await this.userRepository.findByUsername(data.username)

    if (verifyUsername !== undefined) {
      throw new Error('Esse username já foi escolhido, por favor, escolha outro')
    }
    const user = await this.userRepository.create({
      ...data,
      password: passwordHashed
    })
    user.password = ''
    return user
  }
}
