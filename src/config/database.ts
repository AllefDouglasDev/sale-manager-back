import { Client, QueryResult } from 'pg'

import StringTransform from '../utils/StringTransform'

type Result<Model = any> = {
  queryResult: QueryResult<Model>
  data: Model[]
}

export interface IDatabase {
  client: Client
  query<Model = any, Values = any>(
    queryText: string,
    values?: Values[],
    transformInCamelCase?: boolean,
  ): Promise<Result<Model>>
}

export default function Database(): IDatabase {
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'sale-manager',
    password: 'default',
    port: 5432,
  })

  client.connect()

  function query<Model = any, Values = any>(
    queryText: string,
    values: Values[] = [],
    transformInCamelCase = true,
  ): Promise<Result<Model>> {
    return new Promise(async (resolve, reject) => {
      client.query<Model, Values[]>(queryText, values, (err, queryResult) => {
        if (err) {
          return reject(err)
        }

        const data = transformInCamelCase
          ? queryResult.rows.map((value) =>
              StringTransform.modelSnakeCaseToCamelCase<Model>(value),
            )
          : queryResult.rows

        return resolve({ queryResult: queryResult, data })
      })
    })
  }

  return { client, query }
}
