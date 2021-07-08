import { modelToEntity } from '../../utils/Mapper'

export class ClientDTO {
  id: number
  userId: number
  name: string
  phone?: string
  email?: string
  createdAt: Date
  updatedAt: Date

  static from(entity: any): ClientDTO {
    const model: ClientDTO = {
      id: 0,
      userId: 0,
      name: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return modelToEntity(model, entity)
  }
}
