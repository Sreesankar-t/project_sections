import express from 'express'
import dotenv from 'dotenv'
import toDoRoute from './Routes/userRoutes.js'
import bodyParser from 'body-parser'
import connection from './config/databaseConnection.js'
import errorHanddler from './utility/error.js'
import cors from 'cors'
const app = express()
dotenv.config()
const PORT = process.env.PORT

connection()
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

//middleware
app.use(express.json())
app.use(bodyParser.json())

app.use('/toDo', toDoRoute)
app.use(errorHanddler)

app.listen(PORT, () => {
  console.log(`surver is runnig port number ${PORT}`)
})
