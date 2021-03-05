import { Request, Router } from 'express'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.get('/hello-no-auth', (_req, res) => res.json({ message: 'hello no auth' }))

routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.use(authMiddleware)

routes.get('/hello-with-auth', (req: Request, res) => res.json({ message: req.userId }))

export default routes
