import { CreateClientDTO } from '../models/client'
import Client from '../entities/Client'
import Container from '../container'
import IClientRepository from '../repositories/interfaces/IClientRepository'
import IClientService from './interfaces/IClientService'
import RequestError from '../exceptions/RequestError'

export default class ClientService implements IClientService {
  private _clientRepository: IClientRepository

  constructor(private container: Container) {
    this._clientRepository = this.container.clientRepository
  }

  async create(
    createClientDTO: CreateClientDTO,
  ): Promise<Client | RequestError> {
    try {
      const client = await this._clientRepository.create({ ...createClientDTO })

      return client
    } catch (err) {
      return RequestError.internalServerError(err.message)
    }
  }
}
