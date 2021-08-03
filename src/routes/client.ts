import express from 'express'

import Container from '../container'
import ClientController from '../controllers/ClientController'

export default function Router(container: Container) {
  const routes = express.Router()
  const clientController = new ClientController(container)

  routes.post('/', clientController.create)

  return routes
}
