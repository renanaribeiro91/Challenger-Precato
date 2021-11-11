import { Request, Response } from 'express'
import { create, findAll, findOne } from 'src/repository/devedor/devedor'

export const findAlldevedor = async (req:Request, res:Response):Promise<Response> => {
  try {
    const devedor = await findAll()
    return res.status(200).send(devedor)
  } catch (err) {
    return err
  }
}

export const findOneDevedor = async (req:Request, res:Response):Promise<Response> => {
  const { _id } = req.params
  try {
    const credor = await findOne(_id)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

export const createDevedor = async (req:Request, res:Response):Promise<Response> => {
  try {
    const credor = await create(req.body)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}
