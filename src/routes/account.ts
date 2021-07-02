import express from 'express'

import AccountController from '../controllers/AccountController'

const routes = express.Router()
const accountController = new AccountController()

routes.post('/login', accountController.login)

export default routes
