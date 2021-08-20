import { ICreateUserRequestDTO } from '../../dtos/CreateUserDTO'
import User from '../../entities/User'

export interface IUserRepository {
  create: (data: ICreateUserRequestDTO) => Promise <User>
  findById: (data: string) => Promise <User | undefined>
  findByUsername: (data: string) => Promise <User | undefined>
}
