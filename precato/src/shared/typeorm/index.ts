import { createConnection, getConnectionOptions, Connection } from 'typeorm'

export default async (name = 'default'): Promise<Connection> => {
  const defaultOptions = await getConnectionOptions()

  return await createConnection(
    Object.assign(defaultOptions, {
      name,
      database:
        process.env.NODE_ENV === 'test'
          ? 'oni'
          : defaultOptions.database
    })
  )
}