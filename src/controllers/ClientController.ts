import { Request, Response, NextFunction } from 'express'

import IAccountService from '../services/interfaces/IAccountService'
import Container from '../container'
import { isError } from '../utils/TypeGuards'

export default class AccountController {
  private _accountService: IAccountService

  constructor(private container: Container) {
    this._accountService = this.container.accountService
  }

  index = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const result = await this._accountService.listUsers()

      if (isError(result)) {
        return next(result)
      }

      return response.json(result)
    } catch (error) {
      return next(error)
    }
  }

  show = (request: Request, response: Response, next: NextFunction) => {}

  create = (request: Request, response: Response, next: NextFunction) => {}

  update = (request: Request, response: Response, next: NextFunction) => {}

  delete = (request: Request, response: Response, next: NextFunction) => {}
}
