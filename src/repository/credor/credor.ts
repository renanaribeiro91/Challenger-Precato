import { getRepository } from 'typeorm'
import { Credor } from 'src/entity/credor'

export const findAll = async () => {
  return await getRepository(Credor).find()
}

export const findOne = async (_id) => {
  return await getRepository(Credor).findOne(_id)
}

export const create = async (body) => {
  return await getRepository(Credor).create(body)
}
