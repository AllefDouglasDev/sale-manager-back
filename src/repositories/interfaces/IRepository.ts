export default interface IRepository<Model> {
  findOne(id: number): Promise<Model | null>
  findAll(id: number): Promise<Model[]>
  create(model: Model): Promise<Model>
  update(id: number, model: Model): Promise<boolean>
  delete(id: number): Promise<boolean>
}
