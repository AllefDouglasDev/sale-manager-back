import { CreateClientDTO } from '../models/client'
import Client from '../entities/Client'
import IClientRepository from '../repositories/interfaces/IClientRepository'
import IClientService from './interfaces/IClientService'
import RequestError from '../exceptions/RequestError'

export default class ClientService implements IClientService {
  constructor(private clientRepository: IClientRepository) {}

  async create(
    createClientDTO: CreateClientDTO,
  ): Promise<Client | RequestError> {
    try {
      const client = await this.clientRepository.create({ ...createClientDTO })

      return client
    } catch (err) {
      return RequestError.internalServerError(err.message)
    }
  }
}
