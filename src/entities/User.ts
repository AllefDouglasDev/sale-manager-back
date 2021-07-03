export default interface User {
  id: number
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}
