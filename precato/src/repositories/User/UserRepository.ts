import { Repository, getRepository } from 'typeorm'
import User from '../../entities/User'
import { ICreateUserRequestDTO } from '../../dtos/CreateUserDTO'
import { IUserRepository } from './IUserRepository'
export default class UserRepository implements IUserRepository {
  private readonly ormRepository: Repository<User>
  constructor () {
    this.ormRepository = getRepository(User)
  }

  public async create (data: ICreateUserRequestDTO): Promise<User> {
    const user = this.ormRepository.create(data)
    await this.ormRepository.save(user)
    return user
  }

  public async findById (id: string): Promise <User | undefined> {
    const user = await this.ormRepository.findOne(id)
    return user
  }

  public async findByUsername (username: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({
      where: { username }
    })
    return user
  }
}
