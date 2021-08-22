import { inject, injectable } from 'tsyringe'
import Token from '../../entities/Token'
import { ITokenRepository } from '../../repositories/Token/ITokenRepository'

@injectable()
export default class FindTokerService {
  constructor (
    @inject('TokenRepository')
    private readonly tokenRepository: ITokenRepository
  ) {}

  public async execute (tokenString: string): Promise<Token> {
    const token = await this.tokenRepository.findOne(tokenString)
    if (token === undefined) {
      throw new Error('Token inexistente.')
    }
    return token
  }
}
