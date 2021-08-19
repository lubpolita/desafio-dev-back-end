import { Router } from 'express'
import creditorRoutes from './creditor.routes'

const routes = Router()

routes.use('/creditor', creditorRoutes)

export default routes
