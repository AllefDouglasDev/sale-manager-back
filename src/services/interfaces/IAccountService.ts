import User from '../../entities/User'
import RequestError from '../../exceptions/RequestError'

export default interface IAccountService {
  login(email: string, password: string): Promise<User | RequestError>
}
