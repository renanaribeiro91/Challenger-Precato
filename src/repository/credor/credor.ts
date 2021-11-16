import { getRepository } from 'typeorm'
import { Credor } from 'src/model/entity/credor'
import { ICredorRequest } from 'src/model/interfaces/CredorRequest'

export const findAllCredor = async ():Promise<Credor[]> => {
  return await getRepository(Credor).find()
}

export const findOneCredor = async (idCredor:string):Promise<Credor> => {
  return await getRepository(Credor).findOne(idCredor)
}

export const createCredor = async (credor:ICredorRequest):Promise<Credor> => {
  return await getRepository(Credor).create(credor)
}
