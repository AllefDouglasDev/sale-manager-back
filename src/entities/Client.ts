import Entity from './Entity'

export default interface Client extends Entity {
  userId?: number
  name: string
  phone?: string
  email?: string
}
