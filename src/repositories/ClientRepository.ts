import { IDatabase } from '../config/database'
import Client from '../entities/Client'
import IClientRepository from './interfaces/IClientRepository'

export default class ClientRepository implements IClientRepository {
  constructor(private db: IDatabase) {}

  findOne(id: number): Promise<Client | null> {
    throw new Error('Method not implemented.')
  }

  findAll(): Promise<Client[]> {
    throw new Error('Method not implemented.')
  }

  async create(client: Client): Promise<Client> {
    const { data } = await this.db.query<Client>(
      'INSERT INTO clients(user_id, name, phone, email) values($1, $2, $3, $4) RETURNING *;',
      [client.userId, client.name, client.phone, client.email],
    )

    return data[0]
  }

  update(id: number, model: Client): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
