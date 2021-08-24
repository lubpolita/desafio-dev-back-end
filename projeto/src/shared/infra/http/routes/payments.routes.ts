import { Router } from 'express'
import { PaymentsController } from '../../../../controller/PaymentsController'

const paymentsController = new PaymentsController()
const paymentsRoutes = Router()

paymentsRoutes.post('/', paymentsController.create)

paymentsRoutes.get('/', paymentsController.findAll)

export default paymentsRoutes
