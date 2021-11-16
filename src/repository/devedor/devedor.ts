import { getRepository } from 'typeorm'
import { Devedor } from 'src/model/entity/devedor'
import { IDevedorRequest } from 'src/model/interfaces/DevedorRequest'

export const findAllDevedor = async ():Promise<Devedor[]> => {
  return await getRepository(Devedor).find()
}

export const findOneDevedor = async (IdDevedor:string):Promise<Devedor> => {
  return await getRepository(Devedor).findOne(IdDevedor)
}

export const createDevedor = async (devedor:IDevedorRequest):Promise<Devedor> => {
  return await getRepository(Devedor).create(devedor)
}
