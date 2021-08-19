import { Router } from 'express'
import { getRepository } from 'typeorm'
import { Creditor } from '../entities/Creditor'

const creditorRoutes = Router()

creditorRoutes.post('/', async (request, response) => {
  try {
    const repo = getRepository(Creditor)
    const res = await repo.save(request.body)
    return response.status(201).json(res)
  } catch (err) {
    console.log('err.message :>> ', err.message)
  }
})

export default creditorRoutes
