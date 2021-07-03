import RequestError from '../exceptions/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'
import IAccountService from './interfaces/IAccountService'
import User from '../entities/User'
import { LoginDTO, RegisterDTO } from '../models/account'

export default class AccountService implements IAccountService {
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
      phone: '81 98905-4334',
      email,
      password,
      active: true,
      updatedAt: new Date(),
      createdAt: new Date(),
    }
  }
}
