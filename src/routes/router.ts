import { Router } from 'express'
import { credorRoutes } from './credor/credor'
import { devedorRoutes } from './devedor/devedor'
import { paymentRoutes } from './payment/payment'

const router = Router()

router.use('/credor', credorRoutes)
router.use('/credor', devedorRoutes)
router.use('/credor', paymentRoutes)

export { router }
