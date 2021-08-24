import { Router } from 'express'
import { CreditorController } from '../../../../controller/CreditorController'

const creditorController = new CreditorController()
const creditorRoutes = Router()

creditorRoutes.post('/', creditorController.create)

creditorRoutes.get('/', creditorController.findAll)

creditorRoutes.get('/:cpf', creditorController.findByCpf)

export default creditorRoutes
