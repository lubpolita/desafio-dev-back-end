import request from 'supertest'
import app from '../app'
import createConnection from '../shared/typeorm/index'
import { Connection } from 'typeorm'
let connection: Connection
let creditorId: string
let debtorId: string
let getToken: string

describe('Payments', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.dropDatabase()
    await connection.runMigrations()
  })
  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('Should be able to create a new creditor', async () => {
    const response = await request(app).post('/creditor').send({
      name: 'Creditor Example',
      cpf: '290.622.506-10',
      registerStatus: 'aprovado'
    })
    creditorId = response.body.id
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should be able to create a new debtor entity', async () => {
    const response = await request(app).post('/ente_debtor').send({
      name: 'Debtor Entity Example',
      cnpj: '45.763.204/0001-12'
    })
    debtorId = response.body.id
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should be able to create a new payment', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '1',
      idCreditor: creditorId,
      idEnteDebtor: debtorId,
      initialValue: 100,
      finalValue: 10,
      status: 'pago'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  // testando regra de neogocio 1
  it('Should not create a new valid payment, because of the invalid creditor registration', async () => {
    const creditor = await request(app).post('/creditor').send({
      name: 'Creditor Example 2',
      cpf: '290.622.506-12',
      registerStatus: 'não aprovado'
    })
    const response = await request(app).post('/payments').send({
      idRemittance: '2',
      idCreditor: creditor.body.id,
      idEnteDebtor: debtorId,
      initialValue: 100,
      finalValue: 10,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O cadastro do credor não foi aprovado.')
  })

  // testando regra de negocio 2
  it('Should not create a new valid payment, because of the invalid debtor entity registration', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '2',
      idCreditor: creditorId,
      idEnteDebtor: 'c47b06ae-5437-4426-acc9-4b468e506d33',
      initialValue: 100,
      finalValue: 10,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O ID do ente devedor não pode ser identificado.')
  })

  // testando regra de negocio 3
  it('Should not create a new valid payment, because of the invalid initial value', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '2',
      idCreditor: creditorId,
      idEnteDebtor: debtorId,
      initialValue: -100,
      finalValue: 10,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O valor inicial ou o valor final é menor que 0.')
  })

  it('Should not create a new valid payment, because of the invalid final value', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '2',
      idCreditor: creditorId,
      idEnteDebtor: debtorId,
      initialValue: 100,
      finalValue: -10,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O valor inicial ou o valor final é menor que 0.')
  })

  // testando regra de negocio 4
  it('Should not create a new valid payment, because initial value is equal to final value', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '2',
      idCreditor: creditorId,
      idEnteDebtor: debtorId,
      initialValue: 10,
      finalValue: 10,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O valor final é maior ou igual ao valor inicial.')
  })

  it('Should not create a new valid payment, because finalValue > initial value', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '2',
      idCreditor: creditorId,
      idEnteDebtor: debtorId,
      initialValue: 10,
      finalValue: 100,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O valor final é maior ou igual ao valor inicial.')
  })

  // testando regra de negocio 5
  it('Should not create a new valid payment, because of same id of remittance', async () => {
    const response = await request(app).post('/payments').send({
      idRemittance: '1',
      idCreditor: creditorId,
      idEnteDebtor: debtorId,
      initialValue: 100,
      finalValue: 10,
      status: 'pago'
    })
    expect(response.body.reason).toBe('O identificador da remessa já existe em uma solicitação anterior.')
  })

  it('Should be able to get all payments', async () => {
    const usersResponse = await request(app).get('/payments')
    expect(usersResponse.body.length).toBeGreaterThan(0)
  })

  it('Should be able to see all invalid payments', async () => {
    await request(app).post('/user').send({
      name: 'User Example',
      username: 'usernameExample',
      password: 'passexample'
    })
    const token = await request(app).post('/login').send({
      username: 'usernameExample',
      password: 'passexample'
    })
    getToken = token.body.token
    const response = await request(app).get('/invalid_payments').set('Authorization', `Bearer ${getToken}`)
    expect(response.statusCode).toBe(201)
    expect(response.type).toBe('application/json')
  })

  it('Should not be able to see all invalid payments', async () => {
    const token = await request(app).post('/login').send({
      username: 'usernameExample',
      password: 'wrongpass'
    })
    getToken = token.body.token
    const response = await request(app).get('/invalid_payments').set('Authorization', `Bearer ${getToken}`)
    expect(response.statusCode).toBe(400)
  })
})
