import { Request, Response } from 'express'
import { create, findAll, findOne } from 'src/repository/payment/payment'

export const findAllpayment = async (req:Request, res:Response):Promise<Response> => {
  try {
    const payment = await findAll()
    return res.status(200).send(payment)
  } catch (err) {
    return err
  }
}

export const findOnePayment = async (req:Request, res:Response):Promise<Response> => {
  const { _id } = req.params
  try {
    const payment = await findOne(_id)
    return res.status(200).send(payment)
  } catch (err) {
    return err
  }
}

export const createPayment = async (req:Request, res:Response):Promise<Response> => {
  try {
    const payment = await create(req.body)
    return res.status(200).send(payment)
  } catch (err) {
    return err
  }
}
