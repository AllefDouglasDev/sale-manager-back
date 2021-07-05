import Database, { IDatabase } from './config/database'

// Services
import IJWTService from './services/interfaces/IJWTService'
import JWTService from './services/JWTService'
import AccountService from './services/AccountService'
import IAccountService from './services/interfaces/IAccountService'
// Repositories
import IUserRepository from './repositories/interfaces/IUserRepository'
import UserRepository from './repositories/UserRepository'

type Repositories = {
  userRepository: IUserRepository
}

type Services = {
  jwtService: IJWTService
  accountService: IAccountService
}

export default class Container {
  database: IDatabase
  services: Services
  repositories: Repositories

  constructor() {
    this.database = Database()

    this.repositories = {
      userRepository: new UserRepository(this.database),
    }

    this.services = {
      jwtService: new JWTService(),
      accountService: new AccountService(this),
    }
  }
}
