import express from 'express'

import Container from '../container'
import AccountController from '../controllers/AccountController'

export default function Router(container: Container) {
  const routes = express.Router()
  const accountController = new AccountController(container)

  routes.post('/login', accountController.login)

  return routes
}
