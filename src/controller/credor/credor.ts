import { Request, Response } from 'express'
import { createCredor, findAllCredor, findOneCredor } from 'src/repository/credor/credor'

const findAllCredorController = async (req:Request, res:Response):Promise<Response> => {
  try {
    const credor = await findAllCredor()
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

const findOneCredorController = async (req:Request, res:Response):Promise<Response> => {
  const { _id } = req.params
  try {
    const credor = await findOneCredor(_id)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

const createCredorController = async (req:Request, res:Response):Promise<Response> => {
  try {
    const credor = await createCredor(req.body)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

export {
  findAllCredorController,
  findOneCredorController,
  createCredorController
}
