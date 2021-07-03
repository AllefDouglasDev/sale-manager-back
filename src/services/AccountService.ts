import RequestError from '../exceptions/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'
import IAccountService from './interfaces/IAccountService'
import User from 'entities/User'

export default class AccountService implements IAccountService {
  async login(email: string, password: string): Promise<User | RequestError> {
    if (email !== 'admin@email.com' || password !== '123') {
      return new RequestError(
        'Invalid credentials',
        HttpStatusCode.UNAUTHORIZED,
      )
    }

    return {
      id: 1,
      firstName: 'admin',
      lastName: 'super',
      email,
      password,
      active: true,
      updatedAt: new Date(),
      createdAt: new Date(),
    }
  }
}
