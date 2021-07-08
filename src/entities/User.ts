import Entity from './Entity'

export default interface User extends Entity {
  firstName: string
  lastName: string
  phone: string
  email: string
  password: string
}
