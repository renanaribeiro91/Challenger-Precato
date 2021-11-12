import 'reflect-metadata'
import { Connection, createConnection } from 'typeorm'
// import config from './config'

export const dbConnect = async ():Promise<Connection> => {
  try {
    await createConnection()
  } catch (err) {
    console.log('Error while connecting to the database', err)
    return err
  }
}
