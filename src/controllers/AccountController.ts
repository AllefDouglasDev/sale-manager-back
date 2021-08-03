import Controller from './Controller'

import { Request, Response, NextFunction } from '../http/types'
import IAccountService from '../services/interfaces/IAccountService'
import { isError } from '../utils/TypeGuards'
import Container from '../container'
import { LoginDTO, RegisterDTO, UserDTO } from '../models/account'

export default class AccountController extends Controller {
  accountService: IAccountService

  constructor(protected container: Container) {
    super(container)

    this.accountService = container.accountService
  }

  register = async (
    request: Request<RegisterDTO>,
    response: Response<{ token: string; user: UserDTO }>,
    next: NextFunction,
  ) => {
    const result = await this.accountService.register(request.body)

    if (isError(result)) {
      return next(result)
    }

    return response.json({
      token: result.token,
      user: UserDTO.from(result.user),
    })
  }

  login = async (
    request: Request<LoginDTO>,
    response: Response<{ token: string; user: UserDTO }>,
    next: NextFunction,
  ) => {
    const result = await this.accountService.login(request.body)

    if (isError(result)) {
      return next(result)
    }

    return response.json({
      token: result.token,
      user: UserDTO.from(result.user),
    })
  }

  me = async (request: Request, response: Response, next: NextFunction) => {
    const result = await this.accountService.findUserById(request?.userId || 0)

    if (isError(result)) {
      return next(result)
    }

    return response.json(UserDTO.from(result))
  }
}
