// import express from 'express'
// import express = require('express')
import * as express from 'express'
import routes from './routes'

// var express = require('express')

const app = express()
app.use(express.json())
app.use(routes)

export default app
