import RequestError from '../../exceptions/RequestError'
import Client from '../../entities/Client'
import { CreateClientDTO } from '../../models/client'

export default interface IClientService {
  create(createClientDTO: CreateClientDTO): Promise<Client | RequestError>
}
