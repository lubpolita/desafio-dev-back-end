import { inject, injectable } from 'tsyringe'
import User from '../../shared/typeorm/entities/User'
import { IUserRepository } from '../../shared/typeorm/repositories/User/IUserRepository'
import IHashProvider from '../../shared/providers/IHashProvider'
import { ITokenRepository } from '../../shared/typeorm/repositories/Token/ITokenRepository'

interface IResquest{
  username: string
  password: string
}

interface IResponse {
  user: User
  token: string
}

@injectable()
export default class SessionUserService {
  constructor (
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,

    @inject('HashProvider')
    private readonly hashProvider: IHashProvider,

    @inject('TokenRepository')
    private readonly tokenRepository: ITokenRepository
  ) {}

  public async execute (data: IResquest): Promise<IResponse> {
    const user = await this.userRepository.findByUsername(data.username)
    if (user === undefined) {
      throw new Error('Usuário ou senha incorreto.')
    }
    const passwordMatched = await this.hashProvider.compare(data.password, user.password)
    if (!passwordMatched) {
      throw new Error('Usuário ou senha incorreto.')
    }
    const token = await this.tokenRepository.create(user)
    user.password = ''
    return { user: user, token: token.token }
  }
}
