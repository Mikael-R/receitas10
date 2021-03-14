import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'

import './database/connection'
import routes from './routes'

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())
app.use(morgan('dev'))
app.use(routes)

app.use((req, res, next) => {
  const error = new Error('Página não encontrada') as any
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({ error: true, message: error.message })
})

app.listen(port, () => console.log(`Server started on port ${port}`))
