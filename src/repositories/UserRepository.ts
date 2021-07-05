import { IDatabase } from '../config/database'
import User from '../entities/User'
import IUserRepository from './interfaces/IUserRepository'

export default class UserRepository implements IUserRepository {
  constructor(private db: IDatabase) {}

  async findByEmail(email: string): Promise<User | null> {
    const { data } = await this.db.query(
      'SELECT * FROM users WHERE email=$1 AND active=0 LIMIT 1',
      [email],
    )

    return data.length ? data[0] : null
  }

  async findOne(id: number): Promise<User | null> {
    const { data } = await this.db.query(
      'SELECT * FROM users WHERE id=$1 LIMIT 1',
      [id],
    )

    return data.length ? data[0] : null
  }

  findAll(id: number): Promise<User[]> {
    throw new Error('Method not implemented.')
  }

  async create(user: User): Promise<User> {
    const { data } = await this.db.query<User>(
      'INSERT INTO users(first_name, last_name, phone, email, password) VALUES($1, $2, $3, $4, $5) RETURNING *;',
      [user.firstName, user.lastName, user.phone, user.email, user.password],
    )

    return data[0]
  }

  update(id: number, model: User): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete(id: number): Promise<boolean> {
    throw new Error('Method not implemented.')
  }
}
