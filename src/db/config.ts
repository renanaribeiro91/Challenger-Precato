import { ConnectionOptions } from 'typeorm'
import path from 'path'
import 'dotenv/config'

const dir = path.resolve(__dirname, '/entity/*.js')

const config:ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DBNAME,
  entities: [dir],
  synchronize: true
}

export default config
