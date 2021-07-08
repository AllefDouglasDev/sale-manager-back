import { Request, Response, NextFunction } from '../http/types'
import IClientService from '../services/interfaces/IClientService'
import Container from '../container'
import { isError } from '../utils/TypeGuards'
import { CreateClientDTO, ClientDTO } from '../models/client'
import HttpStatusCode from '../enums/HttpStatusCode'

export default class AccountController {
  private _clientService: IClientService

  constructor(private container: Container) {
    this._clientService = this.container.clientService
  }

  index = async (request: Request, response: Response, next: NextFunction) => {}

  show = (request: Request, response: Response, next: NextFunction) => {}

  create = async (
    request: Request<CreateClientDTO>,
    response: Response<ClientDTO>,
    next: NextFunction,
  ) => {
    const result = await this._clientService.create(request.body)

    if (isError(result)) {
      return next(result)
    }

    return response.status(HttpStatusCode.CREATED).json(ClientDTO.from(result))
  }

  update = (request: Request, response: Response, next: NextFunction) => {}

  delete = (request: Request, response: Response, next: NextFunction) => {}
}
