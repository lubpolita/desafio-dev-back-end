import 'reflect-metadata'
import { createConnection } from 'typeorm'
// import * as bodyParser from 'body-parser'
import app from './app'

createConnection().then(async () => {
  // create express app
  // app.use(bodyParser.json())

  // setup express app here
  // ...

  // start express server
  app.listen(3333)

  console.log('Express server has started on port 3333. Open http://localhost:3333/users to see results')
}).catch((error) => console.log(error))
