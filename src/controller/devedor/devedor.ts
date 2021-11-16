import { Request, Response } from 'express'
import { createDevedor, findAllDevedor, findOneDevedor } from 'src/repository/devedor/devedor'

const findAllDevedorController = async (req:Request, res:Response):Promise<Response> => {
  try {
    const devedor = await findAllDevedor()
    return res.status(200).send(devedor)
  } catch (err) {
    return err
  }
}

const findOneDevedorController = async (req:Request, res:Response):Promise<Response> => {
  const { _id } = req.params
  try {
    const credor = await findOneDevedor(_id)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

const createDevedorController = async (req:Request, res:Response):Promise<Response> => {
  try {
    const credor = await createDevedor(req.body)
    return res.status(200).send(credor)
  } catch (err) {
    return err
  }
}

export {
  findAllDevedorController,
  findOneDevedorController,
  createDevedorController
}
