import knex from '../database/connection'

interface CreateRecipeProps {
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
  servings: 'até 2' | 'até 4' | 'até 6' | 'até 10' | 'mais de 10' | string
  difficulty: 'fácil' | 'médio' | 'difícil' | string
  howPrepare: string
  demoImages?: string
  additionalInformation?: string
}

export interface RecipeEntity extends CreateRecipeProps {
  likes: number
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
    .where({ name })
    .where({ authorId })
    .select('*')
    .first()

export default { createRecipe, findByAuthorIdAndName }
