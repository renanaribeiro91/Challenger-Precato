import { Router } from 'express'
import { createDevedorController, findAllDevedorController, findOneDevedorController } from 'src/controller/devedor/devedor'

const devedorRoutes = Router()

devedorRoutes.get('/', findAllDevedorController)
devedorRoutes.post('/', createDevedorController)
devedorRoutes.get('/:id', findOneDevedorController)

export { devedorRoutes }
