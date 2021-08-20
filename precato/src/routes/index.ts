import { Router } from 'express'
import creditorRoutes from './creditor.routes'
import enteDebtorRoutes from './enter_debtor.routes'
import paymentsRoutes from './payments.routes'

const routes = Router()

routes.use('/creditor', creditorRoutes)
routes.use('/ente_debtor', enteDebtorRoutes)
routes.use('/payments', paymentsRoutes)
export default routes
