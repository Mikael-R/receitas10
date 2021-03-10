import { Request, Router } from 'express'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController'
import RecipeController from './controllers/RecipeController'
import authMiddleware from './middlewares/auth'

const routes = Router()

// index – Lista os dados da tabela
// show – Mostra um item específico
// create – Retorna a View para criar um item da tabela
// store – Salva o novo item na tabela
// edit – Retorna a View para edição do dado
// update – Salva a atualização do dado
// destroy – Remove o dado

routes.post('/users', UserController.store)
routes.get('/users/:username', UserController.show)
routes.delete('/users/:username', authMiddleware, UserController.destroy)

routes.post('/sessions', SessionController.store)

routes.get('/recipes/search', RecipeController.index)
// routes.get('/recipes/random', RecipeController.indexRandom)
// routes.get('/recipes/:recipeName/:username', RecipeController.show)
routes.post('/recipes', authMiddleware, RecipeController.store)
// routes.put('/recipes', authMiddleware, RecipeController.update)
routes.delete('/recipes/:recipeName', authMiddleware, RecipeController.destroy)

routes.get('/hello-no-auth', (_, res) => res.json({ message: 'hello no auth' }))
routes.get('/hello-with-auth', authMiddleware, (req: Request, res) =>
  res.json({ message: req.userId })
)

export default routes
