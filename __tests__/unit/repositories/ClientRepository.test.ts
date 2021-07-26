import Database from '../../../src/config/database'
import Client from '../../../src/entities/Client'
import ClientRepository from '../../../src/repositories/ClientRepository'

describe('Unit - ClientRepository', () => {
  const clientRepository = new ClientRepository(Database())

  let client: Client | null = null
  let clientId = 0
  const clientData: Client = {
    userId: 1,
    name: 'My Client',
  }

  beforeEach(async () => {
    client = await clientRepository.create(clientData)
    clientId = client?.id || 0
  })

  afterEach(async () => {
    await clientRepository.delete(clientId)
  })

  it('should create a client', async () => {
    expect(client?.id).toBeDefined()
  })

  it('should list all clients', async () => {
    const clients = await clientRepository.findAll(clientData.userId)

    expect(clients).toHaveLength(1)
  })

  it('should find a client by id', async () => {
    const result = await clientRepository.findOne(clientId)

    expect(client).toEqual(result)
  })

  it('should update a client', async () => {
    const name = 'new client name'
    const updated = await clientRepository.update(clientId, {
      ...clientData,
      name,
    })

    const result = await clientRepository.findOne(clientId)

    expect(updated).toBeDefined()
    expect(result?.name).toEqual(name)
  })

  it('should delete a client by id', async () => {
    const deleted = await clientRepository.delete(clientId)

    expect(client?.id).toBeDefined()
    expect(deleted).toBeTruthy()
  })
})
