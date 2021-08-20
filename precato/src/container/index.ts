import { container } from 'tsyringe'
import { ICreditorsRepository } from '../repositories/Creditor/ICreditorsRepository'
import CreditorRepository from '../repositories/Creditor/CreditorRepository'
import { IEnteDebtorRepository } from '../repositories/EnteDebtor/IEnteDebtorRepository'
import EnteDebtorRepository from '../repositories/EnteDebtor/EnteDebtorRepository'
import { IPaymentsRepository } from '../repositories/Payments/IPaymentsRepository'
import PaymentsRepository from '../repositories/Payments/PaymentsRepository'

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
