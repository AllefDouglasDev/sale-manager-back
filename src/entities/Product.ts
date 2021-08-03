import Entity from './Entity'

export default interface Product extends Entity {
  userId?: number
  name: string
  price: number
}
