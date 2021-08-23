import { container } from 'tsyringe'
import { ICreditorsRepository } from '../../typeorm/repositories/Creditor/ICreditorsRepository'
import CreditorRepository from '../../typeorm/repositories/Creditor/CreditorRepository'
import { IEnteDebtorRepository } from '../../typeorm/repositories/EnteDebtor/IEnteDebtorRepository'
import EnteDebtorRepository from '../../typeorm/repositories/EnteDebtor/EnteDebtorRepository'
import { IPaymentsRepository } from '../../typeorm/repositories/Payments/IPaymentsRepository'
import PaymentsRepository from '../../typeorm/repositories/Payments/PaymentsRepository'
import { IUserRepository } from '../../typeorm/repositories/User/IUserRepository'
import UserRepository from '../../typeorm/repositories/User/UserRepository'
import IHashProvider from '../../providers/IHashProvider'
import HashProvider from '../../providers/HashProvider'
import { IInvalidPaymentsRepository } from '../../typeorm/repositories/InvalidPayments/IInvalidPaymentsRepository'
import InvalidPaymentsRepository from '../../typeorm/repositories/InvalidPayments/InvalidPaymentsRepository'
import { ITokenRepository } from '../../typeorm/repositories/Token/ITokenRepository'
import TokenRepository from '../../typeorm/repositories/Token/TokenRepository'

container.registerSingleton<ICreditorsRepository>(
  'CreditorRepository',
  CreditorRepository
)

container.registerSingleton<IEnteDebtorRepository>(
  'EnteDebtorRepository',
  EnteDebtorRepository
)

container.registerSingleton<IPaymentsRepository>(
  'PaymentsRepository',
  PaymentsRepository
)

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository
)

container.registerSingleton<IHashProvider>(
  'HashProvider',
  HashProvider
)

container.registerSingleton<IInvalidPaymentsRepository>(
  'InvalidPaymentsRepository',
  InvalidPaymentsRepository
)

container.registerSingleton<ITokenRepository>(
  'TokenRepository',
  TokenRepository
)
