import { Router } from 'express'
import { createCredorController, findAllCredorController, findOneCredorController } from 'src/controller/credor/credor'

const credorRoutes = Router()

credorRoutes.get('/', findAllCredorController)
credorRoutes.post('/', createCredorController)
credorRoutes.get('/:id', findOneCredorController)

export { credorRoutes }
