import request from 'supertest'
import app from '../app'
import createConnection from '../database/index'
import { Connection } from 'typeorm'
let connection: Connection
let tokenAuth: string

describe('User', () => {
  beforeAll(async () => {
    connection = await createConnection()
    await connection.dropDatabase()
    await connection.runMigrations()
  })
  afterAll(async () => {
    await connection.dropDatabase()
    await connection.close()
  })

  it('Should not be able to get all users', async () => {
    const usersResponse = await request(app).get('/user')
    expect(usersResponse.body.length).toBe(0)
  })

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      name: 'User Example',
      username: 'usernameExample',
      password: 'passexample'
    })
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty('id')
  })

  it('Should be able to login in the system', async () => {
    const response = await request(app).post('/login').send({
      username: 'usernameExample',
      password: 'passexample'
    })
    tokenAuth = response.body.token
    expect(response.status).toBe(201)
  })

  it('Should not be able to create a new user', async () => {
    const response = await request(app).post('/user').send({
      name: 'User Example',
      username: 'usernameExample',
      password: 'passexample'
    })
    expect(response.status).toBe(400)
  })

  it('Should be able to get all users', async () => {
    const usersResponse = await request(app).get('/user')
    expect(usersResponse.body.length).toBeGreaterThan(0)
  })

  it('Should be able to see all invalid payments', async () => {
    const response = await request(app).get('/invalid_payments').set('Authorization', `Bearer ${tokenAuth}`)
    expect(response.statusCode).toBe(201)
    expect(response.type).toBe('application/json')
  })
})
