import { InvalidPaymentsController } from '../controller/InvalidPaymentsController'
import { Router } from 'express'
import Middleware from '../middlewares/Middleware'

const invalidPaymentsController = new InvalidPaymentsController()
const middleware = new Middleware()
const invalidPaymentsRoutes = Router()

invalidPaymentsRoutes.post('/', invalidPaymentsController.create)
invalidPaymentsRoutes.get('/', middleware.middleware, invalidPaymentsController.findAll)
export default invalidPaymentsRoutes
