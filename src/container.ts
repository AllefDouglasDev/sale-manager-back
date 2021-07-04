import Database, { IDatabase } from './config/database'
import AccountService from './services/AccountService'
import IAccountService from './services/interfaces/IAccountService'

type Services = {
  accountService: IAccountService
}

export default class Container {
  database: IDatabase
  services: Services

  constructor() {
    this.database = Database()

    this.services = {
      accountService: new AccountService(this.database),
    }
  }
}
