import express from 'express'

import AccountController from '../controllers/AccountController'
import AccountService from '../services/AccountService'

const routes = express.Router()
const accountController = new AccountController(new AccountService())

routes.post('/login', accountController.login)

export default routes
