import { getRepository } from 'typeorm'
import { Devedor } from 'src/entity/devedor'

export const findAll = async () => {
  return await getRepository(Devedor).find()
}

export const findOne = async (_id) => {
  return await getRepository(Devedor).findOne(_id)
}

export const create = async (body) => {
  return await getRepository(Devedor).create(body)
}
