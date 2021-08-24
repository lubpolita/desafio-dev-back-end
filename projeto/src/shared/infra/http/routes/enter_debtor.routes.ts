import { Router } from 'express'
import { EnteDebtorController } from '../../../../controller/EnteDebtorController'

const enteDebtorController = new EnteDebtorController()
const enteDebtorRoutes = Router()

enteDebtorRoutes.post('/', enteDebtorController.create)

enteDebtorRoutes.get('/', enteDebtorController.findAll)

enteDebtorRoutes.get('/:cnpj', enteDebtorController.findByCnpj)

enteDebtorRoutes.get('/:id', enteDebtorController.findById)
export default enteDebtorRoutes
