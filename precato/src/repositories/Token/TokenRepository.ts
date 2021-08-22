import { sign } from 'jsonwebtoken'
import { Repository, getRepository } from 'typeorm'
import Token from '../../entities/Token'
import User from '../../entities/User'
import { ITokenRepository } from './ITokenRepository'

export default class TokenRepository implements ITokenRepository {
  private readonly ormRepository: Repository<Token>
  constructor () {
    this.ormRepository = getRepository(Token)
  }

  public async create (user: User): Promise <Token> {
    const tokenString = sign({}, '62ec914d69fe80cfd34efb2ef7831f36', {
      subject: String(user.id),
      expiresIn: '1d'
    })
    const token = this.ormRepository.create({
      user: user,
      token: tokenString,
      name: 'Bearer'
    })
    await this.ormRepository.save(token)
    return token
  }

  public async findOne (tokenString: string): Promise<Token | undefined> {
    const token = await this.ormRepository.findOne({
      where: { token: tokenString }
    })
    return token
  }
}
