import knex from '../database/connection'

import pagination from '../tools/pagination'

export interface RecipeEntity {
  id: string
  authorId: string
  name: string
  preparationTime:
    | 'rápido'
    | 'até 1 hora'
    | 'até 2 horas'
    | 'até 4 horas'
    | 'até 6 horas'
    | 'mais de 6 horas'
    | string
  category:
    | 'acompanhamento'
    | 'bebida'
    | 'bolos'
    | 'carnes'
    | 'comidas fitness'
    | 'comidas típicas'
    | 'doces e sobremesas'
    | 'frango'
    | 'lanches'
    | 'massas'
    | 'molhos'
    | 'peixes'
    | 'petiscos'
    | 'pratos principais'
    | 'sopas'
    | 'temperos'
    | 'tortas'
    | string
  ingredients: string
  servings:
    | 'até 2'
    | 'até 4'
    | 'até 6'
    | 'até 8'
    | 'até 10'
    | 'mais de 10'
    | string
  difficulty: 'fácil' | 'médio' | 'difícil' | string
  howPrepare: string
  demoImages?: string
  additionalInformation?: string
  likes: number
  createdAt: number
  updatedAt: number
}

interface CreateRecipeProps {
  id: string
  authorId: string
  name: string
  preparationTime: string
  category: string
  ingredients: string
  servings: string
  difficulty: string
  howPrepare: string
  demoImages?: string
  additionalInformation?: string
}

interface SearchRecipeProps {
  name: string
  preparationTimes: string[]
  categories: string[]
  servings: string[]
  difficulties: string[]
}

interface UpdateRecipeProps {
  preparationTime: string
  category: string
  ingredients: string
  servings: string
  difficulty: string
  howPrepare: string
  demoImages: string
  additionalInformation: string
}

const createRecipe = ({
  id,
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
}: CreateRecipeProps) =>
  knex<RecipeEntity>('recipes').insert({
    id,
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

const findByAuthorIdAndName = async (authorId: string, name: string) =>
  knex<RecipeEntity>('recipes')
    .where({ authorId })
    .where({ name })
    .select('*')
    .first()

const search = async (
  {
    name,
    preparationTimes,
    categories,
    servings,
    difficulties,
  }: SearchRecipeProps,
  pageNumber: number,
  pageSize: number = 5
) => {
  const query = knex<RecipeEntity>('recipes').select('*')

  if (name) query.where('name', 'like', `%${name}%`)
  if (preparationTimes.length)
    query.whereIn('preparationTime', preparationTimes)
  if (categories.length) query.whereIn('category', categories)
  if (servings.length) query.whereIn('servings', servings)
  if (difficulties.length) query.whereIn('difficulty', difficulties)

  const [count, recipes] = pagination(await query, pageNumber, pageSize)

  return { count, recipes }
}

const searchRandom = async (pageNumber: number, pageSize: number = 5) => {
  const query = await knex.raw<RecipeEntity[]>(
    'SELECT * FROM recipes ORDER BY RANDOM();'
  )

  const [count, recipes] = pagination(query, pageNumber, pageSize)

  return { count, recipes }
}

const findRecipesByAuthorId = async (
  authorId: string,
  pageNumber: number,
  pageSize: number = 5
) => {
  const query = await knex<RecipeEntity>('recipes')
    .where({ authorId })
    .select('*')

  const [count, recipes] = pagination(query, pageNumber, pageSize)

  return { count, recipes }
}

const updateRecipe = async (
  authorId: string,
  name: string,
  {
    preparationTime,
    category,
    ingredients,
    servings,
    difficulty,
    howPrepare,
    demoImages,
    additionalInformation,
  }: UpdateRecipeProps
) => {
  const query = knex<RecipeEntity>('recipes')
    .where({ authorId })
    .where({ name })
    .update({
      updatedAt: new Date().getTime(),
    })

  if (preparationTime) query.update({ preparationTime })
  if (category) query.update({ category })
  if (ingredients) query.update({ ingredients })
  if (servings) query.update({ servings })
  if (difficulty) query.update({ difficulty })
  if (howPrepare) query.update({ preparationTime })
  if (demoImages) query.update({ demoImages })
  if (additionalInformation) query.update({ additionalInformation })

  await query
}

const deleteRecipe = async (authorId: string, name: string) =>
  knex<RecipeEntity>('recipes').where({ authorId }).where({ name }).delete()

export default {
  createRecipe,
  findByAuthorIdAndName,
  search,
  searchRandom,
  findRecipesByAuthorId,
  deleteRecipe,
  updateRecipe,
}
