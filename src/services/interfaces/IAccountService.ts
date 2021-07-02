import RequestError from '../../exceptions/types/RequestError'

export default interface IAccountService {
  login(email: string, password: string): Promise<{ id: number } | RequestError>
}
