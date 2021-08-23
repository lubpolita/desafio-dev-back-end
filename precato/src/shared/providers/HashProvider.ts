import { compare, hash } from 'bcryptjs'
import IHashProvider from './IHashProvider'

export default class HashProvider implements IHashProvider {
  public async compare (payload: string, hashed: string): Promise<boolean> {
    return await compare(payload, hashed)
  }

  public async generateHash (payload: string): Promise<string> {
    return await hash(payload, 8)
  }
}
