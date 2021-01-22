import express from 'express'
import route from './routes'
import cors from 'cors'
import connection from './database/connection'
require('dotenv').config({ path: __dirname + '/.env'})

const app = express()

const _PORT = process.env.PORT
const _DB = process.env.MONGOOSE_DB || 'mongodb+srv://admin:N0xCYTHsvpt39682@cluster0.tofyy.mongodb.net/soa-applies?retryWrites=true&w=majority'

connection.connect(_DB)

app.use(cors())
app.use(express.json())
app.use(route)

app.listen(_PORT, () => console.log('Server running on http://localhost:3333'))