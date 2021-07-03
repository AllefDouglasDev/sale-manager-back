export function modelToEntity<Model>(model: Model, entity: any): Model {
  const keys = Object.keys(model)
  const diff = Object.keys(entity).filter((key) => !keys.includes(key))

  diff.forEach((key) => {
    delete entity[key]
  })

  return entity
}
