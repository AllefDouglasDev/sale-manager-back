import User from '../../entities/User'
import RequestError from '../../exceptions/RequestError'
import { LoginDTO, RegisterDTO } from '../../models/account'

type Login = {
  user: User
  token: string
}

type Register = {
  user: User
  token: string
}

export default interface IAccountService {
  login(loginDTO: LoginDTO): Promise<Login | RequestError>
  register(registerDTO: RegisterDTO): Promise<Register | RequestError>
  findUserById(id: number): Promise<User | RequestError>
}
