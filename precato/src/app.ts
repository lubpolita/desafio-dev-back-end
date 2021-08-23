// import * as express from 'express'
import express from 'express'
import routes from './routes'
import 'reflect-metadata'
import './container'

const app = express()
app.use(express.json())
app.use(routes)

export default app
