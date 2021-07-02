import { Request, Response, NextFunction } from 'express'

import IAccountService from '../services/interfaces/IAccountService'
import { isError } from '../utils/TypeGuards'

export default class AccountController {
  constructor(private accountService: IAccountService) {}

  login = async (request: Request, response: Response, next: NextFunction) => {
    const { email, password } = request.body

    const result = await this.accountService.login(email, password)

    if (isError(result)) {
      return next(result)
    }

    return response.json(result)
  }
}
