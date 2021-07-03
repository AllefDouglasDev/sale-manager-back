import Controller from './Controller'

import { Request, Response, NextFunction } from '../http/types'
import IAccountService from '../services/interfaces/IAccountService'
import { isError } from '../utils/TypeGuards'
import Container from '../container'
import { LoginDTO, UserDTO } from '../models/account'

export default class AccountController extends Controller {
  accountService: IAccountService

  constructor(protected container: Container) {
    super(container)

    this.accountService = container.services.accountService
  }

  login = async (
    request: Request<LoginDTO>,
    response: Response<UserDTO>,
    next: NextFunction,
  ) => {
    const { email, password } = request.body

    const result = await this.accountService.login(email, password)

    if (isError(result)) {
      return next(result)
    }

    return response.json(UserDTO.from(result))
  }
}
