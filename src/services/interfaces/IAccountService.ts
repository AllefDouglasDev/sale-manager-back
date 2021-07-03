import User from '../../entities/User'
import RequestError from '../../exceptions/RequestError'
import { LoginDTO, RegisterDTO } from '../../models/account'

export default interface IAccountService {
  login(loginDTO: LoginDTO): Promise<User | RequestError>
  register(registerDTO: RegisterDTO): Promise<User | RequestError>
}
