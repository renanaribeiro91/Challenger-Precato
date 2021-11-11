import { Request, Response, Router } from 'express'

const router = Router()

router.get('/get', (req:Request, res: Response) => res.send('oi'))

export { router }
