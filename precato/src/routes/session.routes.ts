import SessionUserController from '../controller/SessionUserController'
import { Router } from 'express'
const sessionUserController = new SessionUserController()
const sessionRoutes = Router()

sessionRoutes.post('/', sessionUserController.create)

export default sessionRoutes
