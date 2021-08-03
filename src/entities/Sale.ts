import Entity from './Entity'

export default interface Sale extends Entity {
  userId?: number
  productId?: number
  clientId?: number
  discount: number
  price: number
  paid: number
}
