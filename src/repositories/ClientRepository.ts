import { IDatabase } from '../config/database'
import Client from '../entities/Client'
import IClientRepository from './interfaces/IClientRepository'

export default class ClientRepository implements IClientRepository {
  constructor(private db: IDatabase) {}

  async findOne(id: number): Promise<Client | null> {
    const { data } = await this.db.query<Client>(
      'SELECT * FROM clients WHERE id=$1 AND active=0',
      [id],
    )

    return data.length > 0 ? data[0] : null
  }

  async findAll(userId?: number): Promise<Client[]> {
    const { data } = await this.db.query<Client>(
      'SELECT * FROM clients WHERE user_id=$1 AND active=0',
      [userId],
    )

    return data
  }

  async create(client: Client): Promise<Client> {
    const { data } = await this.db.query<Client>(
      'INSERT INTO clients(user_id, name, phone, email) values($1, $2, $3, $4) RETURNING *;',
      [client.userId, client.name, client.phone, client.email],
    )

    return data[0]
  }

  async update(id: number, client: Client): Promise<boolean> {
    const { data } = await this.db.query<Client>(
      'UPDATE clients SET user_id=$1, name=$2, phone=$3, email=$4 WHERE id=$5',
      [client.userId, client.name, client.phone, client.email, id],
    )

    return data.length > 0
  }

  async delete(id: number): Promise<boolean> {
    const { data } = await this.db.query<Client>(
      'UPDATE clients SET active=1 WHERE id=$1 RETURNING *;',
      [id],
    )

    return data.length > 0
  }
}
