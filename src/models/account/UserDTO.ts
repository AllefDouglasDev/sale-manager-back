import { modelToEntity } from '../../utils/Mapper'

export class UserDTO {
  id: number
  firstName: string
  lastName: string
  email: string
  phone: string
  createdAt: Date
  updatedAt: Date

  static from(entity: any): UserDTO {
    const model: UserDTO = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    return modelToEntity(model, entity)
  }
}
