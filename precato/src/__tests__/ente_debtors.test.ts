import request from 'supertest'
import app from '../app'
import createConnection from '../database/index'
import { Connection } from 'typeorm'
let connection: Connection
let debtorId: string

describe('EnteDebtor', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.dropDatabase()
    await connection.runMigrations()
  })
  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('Should not be able to get all debtor entity', async () => {
    const usersResponse = await request(app).get('/ente_debtor')
    expect(usersResponse.body.length).toBe(0)
  })

  it('Should be able to create a new debtor entity', async () => {
    const response = await request(app).post('/ente_debtor').send({
      name: 'Debtor Entity Example',
      cnpj: '45.763.204/0001-12'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should not be able to create a new debtor entity', async () => {
    const response = await request(app).post('/ente_debtor').send({
      name: 'Debtor Entity Example 2',
      cnpj: '45.763.204/0001-12'
    })
    debtorId = response.body.id
    expect(response.status).toBe(400)
  })

  it('Should be able to get all debtors entity', async () => {
    const usersResponse = await request(app).get('/ente_debtor')
    expect(usersResponse.body.length).toBeGreaterThan(0)
  })

  it('Should be able to find a debtor entity by cnpj', async () => {
    const response = await request(app).get('/ente_debtor/:cnpj').send({
      cpf: '45.763.204/0001-12'
    })
    expect(response.status).toBe(201)
  })

  it('Should be able to find a debtor entity by id', async () => {
    const response = await request(app).get('/ente_debtor/:id').send({
      id: debtorId
    })
    expect(response.body.id).toBe(debtorId)
  })

  it('Should not find a debtor entity by id', async () => {
    const response = await request(app).get('/ente_debtor/:id').send({
      id: 'invalid'
    })
    expect(response.body).toBe('')
  })
})
