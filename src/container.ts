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
  database: IDatabase

  constructor() {
    this.database = Database()
  }

  // Repositories
  get userRepository(): IUserRepository {
    return new UserRepository(this.database)
  }

  get clientRepository(): IClientRepository {
    return new ClientRepository(this.database)
  }

  // Services
  get jwtService(): IJWTService {
    return new JWTService()
  }

  get accountService(): IAccountService {
    return new AccountService(this.userRepository, this.jwtService)
  }

  get clientService(): IClientService {
    return new ClientService(this.clientRepository)
  }
}
