import express from 'express'

import Container from '../container'

import account from './account'
import client from './client'

const routes = express.Router()
const container = new Container()

routes.use('/account', account(container))
routes.use('/clients', client(container))

export default routes
