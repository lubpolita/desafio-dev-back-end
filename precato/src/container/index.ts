import { container } from 'tsyringe'
import { ICreditorsRepository } from '../repositories/Creditor/ICreditorsRepository'
import CreditorRepository from '../repositories/Creditor/CreditorRepository'
import { IEnteDebtorRepository } from '../repositories/EnteDebtor/IEnteDebtorRepository'
import EnteDebtorRepository from '../repositories/EnteDebtor/EnteDebtorRepository'
import { IPaymentsRepository } from '../repositories/Payments/IPaymentsRepository'
import PaymentsRepository from '../repositories/Payments/PaymentsRepository'
import { IUserRepository } from '../repositories/User/IUserRepository'
import UserRepository from '../repositories/User/UserRepository'
import IHashProvider from '../providers/IHashProvider'
import HashProvider from '../providers/HashProvider'

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
