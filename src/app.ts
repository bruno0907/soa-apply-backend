import express from 'express'
import route from './routes'
import cors from 'cors'
import mongoose from 'mongoose'
require('dotenv').config()

const app = express()

const URI: string | any = process.env.MONGOOSE_DB

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('Connected to the Database'))     
  .catch(error => console.error(error))

app.use(cors())
app.use(express.json())

app.use(route)

export default app