import Token from '../../entities/Token'
import User from '../../entities/User'

export interface ITokenRepository {
  create: (user: User) => Promise <Token>
  findOne: (tokenString: string) => Promise<Token | undefined>
}
