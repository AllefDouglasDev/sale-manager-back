import { Request, Response, NextFunction } from 'express'

export default class AccountController {
  index: (request: Request, response: Response, next: NextFunction) => {}

  show: (request: Request, response: Response, next: NextFunction) => {}

  create: (request: Request, response: Response, next: NextFunction) => {}

  update: (request: Request, response: Response, next: NextFunction) => {}

  delete: (request: Request, response: Response, next: NextFunction) => {}
}
