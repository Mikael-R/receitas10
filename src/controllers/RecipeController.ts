import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

import recipeRepository from '../repository/recipe-repository'

class RecipeController {
  async store(req: Request, res: Response) {
    const {
      name,
      preparationTime,
      category,
      ingredients,
      servings,
      difficulty,
      howPrepare,
      demoImages = '',
      additionalInformation = '',
    } = req.body

    if (
      !name ||
      !preparationTime ||
      !category ||
      !ingredients ||
      !servings ||
      !difficulty ||
      !howPrepare
    )
      return res
        .status(422)
        .json({ error: true, message: 'Parâmetros faltando' })

    if (
      typeof name !== 'string' ||
      typeof preparationTime !== 'string' ||
      typeof category !== 'string' ||
      typeof ingredients !== 'string' ||
      typeof servings !== 'string' ||
      typeof difficulty !== 'string' ||
      typeof howPrepare !== 'string' ||
      typeof demoImages !== 'string' ||
      typeof additionalInformation !== 'string'
    )
      return res.status(403).json({
        error: true,
        message: 'Parâmetros informados não são strings',
      })

    const authorId = req.userId
    const recipe = await recipeRepository.findByAuthorIdAndName(authorId, name)
    if (recipe)
      return res.status(409).json({
        error: true,
        message: 'Nome da receita já está em uso por este usuário',
        recipe: {
          id: recipe.id,
          authorId,
        },
      })

    const recipeId = uuidv4()
    await recipeRepository.createRecipe({
      id: recipeId,
      authorId,
      name,
      preparationTime,
      category,
      ingredients,
      servings,
      difficulty,
      howPrepare,
      demoImages,
      additionalInformation,
    })

    return res.status(201).json({
      error: false,
      message: 'Receita criada com sucesso',
      recipe: {
        id: recipeId,
        authorId,
      },
    })
  }

  async delete(req: Request, res: Response) {
    const { recipeName } = req.params
    const authorId = req.userId

    const recipe = await recipeRepository.findByAuthorIdAndName(
      authorId,
      recipeName
    )

    if (!recipe) {
      return res
        .status(404)
        .json({ error: true, message: 'Receita não encontrada' })
    }

    await recipeRepository.deleteRecipe(authorId, recipeName)

    res.json({
      error: false,
      message: 'Receita deletada com sucesso',
      recipe: {
        id: recipe.id,
        authorId,
        name: recipeName,
      },
    })
  }
}

export default new RecipeController()
