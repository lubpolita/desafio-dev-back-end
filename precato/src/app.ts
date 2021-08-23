// import * as express from 'express'
import express from 'express'
import routes from './shared/infra/http/routes'
import 'reflect-metadata'
import './shared/infra/container'

const app = express()
app.use(express.json())
app.use(routes)

export default app
