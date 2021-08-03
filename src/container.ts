import Database, { IDatabase } from './config/database'

// Services
import IJWTService from './services/interfaces/IJWTService'
import JWTService from './services/JWTService'
import IAccountService from './services/interfaces/IAccountService'
import AccountService from './services/AccountService'
import IClientService from './services/interfaces/IClientService'
import ClientService from './services/ClientService'
// Repositories
import IUserRepository from './repositories/interfaces/IUserRepository'
import UserRepository from './repositories/UserRepository'
import IClientRepository from './repositories/interfaces/IClientRepository'
import ClientRepository from './repositories/ClientRepository'

export default class Container {
  // repositories
  private _userRepository: IUserRepository
  private _clientRepository: IClientRepository
  // services
  private _jwtService: IJWTService
  private _accountService: IAccountService
  private _clientService: IClientService

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

  get clientRepository(): IClientRepository {
    if (!this._clientRepository) {
      this._clientRepository = new ClientRepository(this.database)
    }

    return this._clientRepository
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

  get clientService(): IClientService {
    if (!this._clientService) {
      this._clientService = new ClientService(this)
    }

    return this._clientService
  }
}
