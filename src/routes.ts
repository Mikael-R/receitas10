import { Request, Router } from 'express'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import RecipeController from './controllers/RecipeController'
import authMiddleware from './middlewares/auth'

const routes = Router()

routes.post('/users', UserController.store)
routes.get('/users/:username', UserController.show)
routes.delete('/users/:username', authMiddleware, UserController.delete)

routes.post('/sessions', SessionController.store)

routes.post('/recipes', authMiddleware, RecipeController.store)
routes.delete('/recipes/:recipeName', authMiddleware, RecipeController.delete)

routes.get('/hello-no-auth', (_, res) => res.json({ message: 'hello no auth' }))
routes.get('/hello-with-auth', authMiddleware, (req: Request, res) =>
  res.json({ message: req.userId })
)

export default routes
