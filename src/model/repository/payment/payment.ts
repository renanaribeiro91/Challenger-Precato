import { getRepository } from 'typeorm'
import { Payment } from 'src/model/entity/payment'

export const findAll = async () => {
  return await getRepository(Payment).find()
}

export const findOne = async (_id) => {
  return await getRepository(Payment).findOne(_id)
}

export const create = async (body) => {
  return await getRepository(Payment).create(body)
}
