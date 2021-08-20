import { inject, injectable } from 'tsyringe'
import User from '../../entities/User'
import { IUserRepository } from '../../repositories/User/IUserRepository'
import IHashProvider from '../../providers/IHashProvider'
import { sign } from 'jsonwebtoken'

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
    private readonly hashProvider: IHashProvider
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
    const token = sign({}, '62ec914d69fe80cfd34efb2ef7831f36', {
      subject: String(user.id),
      expiresIn: '1d'
    })

    user.password = ''

    return { user, token }
  }
}
