import express from 'express'
import route from './routes'
import cors from 'cors'
import mongoose from 'mongoose'
import { config } from 'dotenv'

config({ path: __dirname + '/' + '.env' })
const app = express()

const PORT = process.env.PORT
const URI = process.env.MONGOOSE_DB as string

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(() => console.log('Connected to the Database'))     
  .catch(error => console.error(error.message))

app.use(cors())
app.use(express.json())
app.use(route)

app.listen(PORT, () => console.log('Server running on http://localhost:3333'))