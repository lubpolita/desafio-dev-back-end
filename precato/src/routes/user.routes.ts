import { UserController } from '../controller/UserController'
import { Router } from 'express'

const userController = new UserController()
const userRoutes = Router()

userRoutes.post('/', userController.create)
userRoutes.get('/', userController.findAll)
export default userRoutes
