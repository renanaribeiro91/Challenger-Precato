import { Request, Response } from 'express'
import { create, findAll, findOne } from 'src/model/repository/credor/credor'

export const findAllCredor = async (req:Request, res:Response):Promise<Response> => {
  try {
    const credor = await findAll()
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

export const findOneCredor = async (req:Request, res:Response):Promise<Response> => {
  const { _id } = req.params
  try {
    const credor = await findOne(_id)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

export const createCredor = async (req:Request, res:Response):Promise<Response> => {
  try {
    const credor = await create(req.body)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}
