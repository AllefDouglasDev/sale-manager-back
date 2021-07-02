import express from 'express'

import ErrorHandler from './exceptions/ErrorHandler'
import routes from './routes'

const app = express()

app.use(express.json())
app.use(routes)
app.use(ErrorHandler)

export default app
