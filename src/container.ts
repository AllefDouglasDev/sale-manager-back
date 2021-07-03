import AccountService from './services/AccountService'
import IAccountService from './services/interfaces/IAccountService'

type Services = {
  accountService: IAccountService
}

export default class Container {
  services: Services = {
    accountService: new AccountService(),
  }
}
