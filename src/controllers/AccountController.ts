import { Request, Response, NextFunction } from 'express'

import RequestError from '../exceptions/types/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'

export default class AccountController {
  login = (request: Request, response: Response, next: NextFunction) => {
    try {
      const { email, password } = request.body

      if (email !== 'admin@email.com' && password !== '123') {
        return next(
          new RequestError('Invalid credentials', HttpStatusCode.UNAUTHORIZED),
        )
      }

      return response.json({ success: true })
    } catch (error) {
      return next(error)
    }
  }
}
