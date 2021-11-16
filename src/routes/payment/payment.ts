import { Router } from 'express'
import { createPaymentsController, findAllPaymentsController, findOnePaymentsController } from 'src/controller/payment/payment'

const paymentRoutes = Router()

paymentRoutes.get('/', findAllPaymentsController)
paymentRoutes.post('/', createPaymentsController)
paymentRoutes.get('/:id', findOnePaymentsController)

export { paymentRoutes }
