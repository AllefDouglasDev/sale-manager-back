import IRepository from './IRepository'
import Client from '../../entities/Client'

export default interface IClientRepository extends IRepository<Client> {
  findAll(userId?: number): Promise<Client[]>
}
