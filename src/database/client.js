import 'dotenv/config'
import pg from 'pg'

export const client = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "node",
  password: "node",
  database: "node",
})

await client.connect()