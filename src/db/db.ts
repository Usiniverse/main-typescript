import knex from 'knex'

export const db = knex({
    client: "mysql",
    connection: {
      host: '127.0.0.1',
      port: 3306,
      database: 'root',
      user: 'root',
      password: 'Asd20902!!',
    },
  })
  