import RequestError from '../exceptions/RequestError'
import HttpStatusCode from '../enums/HttpStatusCode'
import IAccountService from './interfaces/IAccountService'
import User from '../entities/User'
import { LoginDTO, RegisterDTO } from '../models/account'
import Container from '../container'
import IUserRepository from '../repositories/interfaces/IUserRepository'
import IJWTService from './interfaces/IJWTService'

export default class AccountService implements IAccountService {
  private _userRepository: IUserRepository
  private _jwtService: IJWTService

  constructor(private container: Container) {
    this._userRepository = this.container.userRepository
    this._jwtService = this.container.jwtService
  }

  async listUsers() {
    try {
      const users = await this._userRepository.findAll()

      return users
    } catch (err) {
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }

  async findUserById(id: number) {
    try {
      const user = await this._userRepository.findOne(id)

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
      const user = await this._userRepository.create(registerDTO)

      const token = await this._jwtService.create(user?.id || 0)

      return { user, token }
    } catch (err) {
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }

  async login({ email, password }: LoginDTO) {
    try {
      const user = await this._userRepository.findByEmail(email)

      if (!user || user.password !== password) {
        return new RequestError(
          'Invalid credentials',
          HttpStatusCode.UNAUTHORIZED,
        )
      }

      const token = await this._jwtService.create(user?.id || 0)

      return { user, token }
    } catch (err) {
      return new RequestError(err.message, HttpStatusCode.INTERNAL_SERVER_ERROR)
    }
  }
}
