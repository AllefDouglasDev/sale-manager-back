import { Client, QueryResult } from 'pg'

export interface IDatabase {
  client: Client
  query<Model = any, Values = any>(
    queryText: string,
    values?: Values[],
  ): Promise<QueryResult<Model>>
}

export default function Database(): IDatabase {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sala-manager-db',
    password: 'default',
    port: 5432,
  })

  client.connect()

  function query<Model = any, Values = any>(
    queryText: string,
    values: Values[] = [],
  ): Promise<QueryResult<Model>> {
    return new Promise(async (resolve, reject) => {
      client.query<Model, Values[]>(queryText, values, (err, result) => {
        if (err) {
          return reject(err)
        }

        return resolve(result)
      })
    })
  }

  return { client, query }
}
