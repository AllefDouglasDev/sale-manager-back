import Database, { IDatabase } from './config/database'

// Services
import IJWTService from './services/interfaces/IJWTService'
import JWTService from './services/JWTService'
import AccountService from './services/AccountService'
import IAccountService from './services/interfaces/IAccountService'
// Repositories
import IUserRepository from './repositories/interfaces/IUserRepository'
import UserRepository from './repositories/UserRepository'

export default class Container {
  // repositories
  private _userRepository: IUserRepository
  // services
  private _jwtService: IJWTService
  private _accountService: IAccountService

  database: IDatabase

  constructor() {
    this.database = Database()
  }

  // Repositories
  get userRepository(): IUserRepository {
    if (!this._userRepository) {
      this._userRepository = new UserRepository(this.database)
    }

    return this._userRepository
  }

  // Services
  get jwtService(): IJWTService {
    if (!this._jwtService) {
      this._jwtService = new JWTService()
    }

    return this._jwtService
  }

  get accountService(): IAccountService {
    if (!this._accountService) {
      this._accountService = new AccountService(this)
    }

    return this._accountService
  }
}
