import { Router } from 'express'
import { EnteDebtorController } from '../controller/EnteDebtorController'

const enteDebtorController = new EnteDebtorController()
const enteDebtorRoutes = Router()

enteDebtorRoutes.post('/', enteDebtorController.create)

enteDebtorRoutes.get('/', enteDebtorController.findAll)
export default enteDebtorRoutes
