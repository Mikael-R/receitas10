import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'

import recipeRepository from '../repository/recipe-repository'
import isArray from '../tools/isArray'

class RecipeController {
  async index(req: Request, res: Response) {
    const {
      name = '',
      preparationTimes = [],
      categories = [],
      servings = [],
      difficulties = [],
    } = req.body
    const page: number = (req.query.page as any) || 1

    if (
      typeof name !== 'string' ||
      !isArray(preparationTimes) ||
      !isArray(categories) ||
      !isArray(servings) ||
      !isArray(difficulties)
    )
      return res.status(403).json({
        error: true,
        message: 'Parâmetros informados não tem os tipos corretos',
      })

    if (
      !name &&
      !preparationTimes.length &&
      !categories.length &&
      !servings.length &&
      !difficulties.length
    )
      return res
        .status(422)
        .json({ error: true, message: 'Nenhum parâmetro foi informado' })

    const { count, recipes } = await recipeRepository.search(
      {
        name,
        preparationTimes,
        categories,
        servings,
        difficulties,
      },
      page
    )
    return res
      .status(302)
      .header('X-Total-Count', count)
      .json({ error: false, message: 'Receitas encontradas', recipes })
  }

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

  async destroy(req: Request, res: Response) {
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
