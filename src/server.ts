import express from 'express'
import 'dotenv/config'
import { router } from './routes/router'
import cors from 'cors'
import './db/createConnect'
import 'express-async-errors'

const app = express()

app.use(express.json)
app.use(cors())
app.use(router)

app.listen(process.env.PORT, () => {
  console.log(`server is run on PORT ${process.env.PORT}`)
})
