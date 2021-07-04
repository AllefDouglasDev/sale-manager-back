import RequestError from '../exceptions/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'
import IAccountService from './interfaces/IAccountService'
import User from '../entities/User'
import { LoginDTO, RegisterDTO } from '../models/account'
import { IDatabase } from '../config/database'

export default class AccountService implements IAccountService {
  constructor(private db: IDatabase) {}

  async register(registerDTO: RegisterDTO): Promise<User | RequestError> {
    return {
      id: 1,
      firstName: registerDTO.firstName,
      lastName: registerDTO.lastName,
      phone: registerDTO.phone,
      email: registerDTO.email,
      password: registerDTO.password,
      active: true,
      updatedAt: new Date(),
      createdAt: new Date(),
    }
  }

  async login({ email, password }: LoginDTO): Promise<User | RequestError> {
    try {
      const { rows } = await this.db.query<User>(
        'SELECT * FROM users WHERE email=$1 AND password=$2 LIMIT 1',
        [email, password],
      )

      if (!rows.length) {
        return new RequestError(
          'Invalid credentials',
          HttpStatusCode.UNAUTHORIZED,
        )
      }

      return rows[0]
    } catch (err) {
      console.log(err)
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }
}
