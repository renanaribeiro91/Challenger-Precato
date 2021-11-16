import { getRepository } from 'typeorm'
import { Payment } from 'src/model/entity/payment'
import { IPaymentRequest } from 'src/model/interfaces/PaymentRequest'

export const findAll = async ():Promise<Payment[]> => {
  return await getRepository(Payment).find()
}

export const findOne = async (IdPayment:string):Promise<Payment> => {
  return await getRepository(Payment).findOne(IdPayment)
}

export const create = async (payment:IPaymentRequest):Promise<Payment> => {
  return await getRepository(Payment).create(payment)
}
