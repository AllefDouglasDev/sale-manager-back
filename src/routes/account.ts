import express from 'express'

import Container from '../container'
import AccountController from '../controllers/AccountController'
import authorize from '../middleware/JWTMiddleware'

export default function Router(container: Container) {
  const routes = express.Router()
  const accountController = new AccountController(container)

  routes.post('/register', accountController.register)
  routes.post('/login', accountController.login)
  routes.get('/me', authorize, accountController.me)

  return routes
}
