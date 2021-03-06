import { Router } from 'express'
import creditorRoutes from './creditor.routes'
import enteDebtorRoutes from './enter_debtor.routes'
import paymentsRoutes from './payments.routes'
import userRoutes from './user.routes'
import sessionRoutes from './session.routes'
import invalidPaymentsRoutes from './invalid_payments.routes'

const routes = Router()

routes.use('/creditor', creditorRoutes)
routes.use('/ente_debtor', enteDebtorRoutes)
routes.use('/payments', paymentsRoutes)
routes.use('/user', userRoutes)
routes.use('/login', sessionRoutes) // fazer login para poder acessar os pagamentos invalidos
routes.use('/invalid_payments', invalidPaymentsRoutes)

export default routes
