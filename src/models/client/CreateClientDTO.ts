import { modelToEntity } from '../../utils/Mapper'

export class CreateClientDTO {
  userId: number
  name: string
  phone?: string
  email?: string

  static from(entity: any): CreateClientDTO {
    const model: CreateClientDTO = {
      userId: 0,
      name: '',
    }

    return modelToEntity(model, entity)
  }
}
