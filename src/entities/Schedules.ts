import Entity from './Entity'

export default interface Schedules extends Entity {
  userId?: number
  clientId?: number
  name: string
  description?: string
  date: Date
}
