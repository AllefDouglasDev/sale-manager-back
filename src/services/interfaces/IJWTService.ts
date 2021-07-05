export default interface IJWTService {
  create(userId: number): Promise<string>
  verify<T = any>(token: string): Promise<T>
}
