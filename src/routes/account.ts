import express from 'express'

import Container from '../container'
import AccountController from '../controllers/AccountController'
import authenticate from '../middleware/JWTMiddleware'

export default function Router(container: Container) {
  const routes = express.Router()
  const accountController = new AccountController(container)

  routes.post('/register', accountController.register)
  routes.post('/login', accountController.login)
  routes.get('/me', authenticate, accountController.me)

  return routes
}
