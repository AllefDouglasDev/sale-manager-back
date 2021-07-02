import RequestError from '../exceptions/types/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'
import IAccountService from './interfaces/IAccountService'

export default class AccountService implements IAccountService {
  async login(
    email: string,
    password: string,
  ): Promise<{ id: number } | RequestError> {
    if (email !== 'admin@email.com' || password !== '123') {
      return new RequestError(
        'Invalid credentials',
        HttpStatusCode.UNAUTHORIZED,
        {
          email: 'E-mail is required',
          password: 'Password is required',
        },
      )
    }

    return { id: 1 }
  }
}
