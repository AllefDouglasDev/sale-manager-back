import express from 'express'

import ErrorHandler from '../exceptions/ErrorHandler'
import account from './account'

const routes = express.Router()

routes.use('/account', account)

routes.use(ErrorHandler)

export default routes
