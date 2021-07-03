import express from 'express'

import Container from '../container'
import account from './account'

const routes = express.Router()
const container = new Container()

routes.use('/account', account(container))

export default routes
