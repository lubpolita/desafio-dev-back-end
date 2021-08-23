import request from 'supertest'
import app from '../app'
import createConnection from '../database/index'
import { Connection } from 'typeorm'
let connection: Connection

describe('Creditors', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.dropDatabase()
    await connection.runMigrations()
  })
  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('Should not be able to get all creditors', async () => {
    const usersResponse = await request(app).get('/creditor')
    expect(usersResponse.body.length).toBe(0)
  })

  it('Should be able to create a new creditor', async () => {
    const response = await request(app).post('/creditor').send({
      name: 'Creditor Example',
      cpf: '290.622.506-10',
      registerStatus: 'aprovado'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should return a error if cpf already exists', async () => {
    const response = await request(app).post('/creditor').send({
      name: 'Creditor Example 2',
      cpf: '290.622.506-10',
      registerStatus: 'aprovado'
    })
    expect(response.status).toBe(400)
  })

  it('Should be able to get all creditors', async () => {
    const usersResponse = await request(app).get('/creditor')
    expect(usersResponse.body.length).toBeGreaterThan(0)
  })

  it('Should be able to find creditor by cpf', async () => {
    const response = await request(app).get('/creditor/:cpf').send({
      cpf: '290.622.506-10'
    })
    expect(response.status).toBe(201)
  })
})
