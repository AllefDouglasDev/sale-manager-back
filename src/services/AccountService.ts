import RequestError from '../exceptions/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'
import IAccountService from './interfaces/IAccountService'
import User from '../entities/User'
import { LoginDTO, RegisterDTO } from '../models/account'
import Container from '../container'
import IUserRepository from '../repositories/interfaces/IUserRepository'

export default class AccountService implements IAccountService {
  userRepository: IUserRepository

  constructor(private container: Container) {
    this.userRepository = this.container.repositories.userRepository
  }

  async findUserById(id: number) {
    try {
      const user = await this.userRepository.findOne(id)

      if (!user) {
        return new RequestError('User not found', HttpStatusCode.NOT_FOUND)
      }

      return user
    } catch (err) {
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }

  async register(registerDTO: RegisterDTO) {
    try {
      const user = await this.userRepository.create(registerDTO)

      const token = await this.container.services.jwtService.create(
        user?.id || 0,
      )

      return { user, token }
    } catch (err) {
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }

  async login({ email, password }: LoginDTO) {
    try {
      const user = await this.userRepository.findByEmail(email)

      if (!user || user.password !== password) {
        return new RequestError(
          'Invalid credentials',
          HttpStatusCode.UNAUTHORIZED,
        )
      }

      const token = await this.container.services.jwtService.create(
        user?.id || 0,
      )

      return { user, token }
    } catch (err) {
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }
}
