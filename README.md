# receitas10-api

```
Comment
{
  id: string
  user: {
    id: string
    name: string
    username: string
    avatarUrl: string
  }
  content: string
  postedAt: string
}

Recipe
{
  id: string
  preparationTime:
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas"
  category:
    | "acompanhamento"
    | "bebida"
    | "bolos"
    | "carnes"
    | "comidas fitness"
    | "comidas típicas"
    | "doces e sobremesas"
    | "frango"
    | "lanches"
    | "massas"
    | "molhos"
    | "peixes"
    | "petiscos"
    | "pratos principais"
    | "sopas"
    | "temperos"
    | "tortas"
  ingredients: string[]
  servings: "até 2" | "até 4" | "até 6" | "até 10" | "mais de 10"
  difficulty: "fácil" | "médio" | "difícil"
  howToPrepare: string
  demoImages: string[]
  additionalInformation: string
  likes: number
  postedAt: string
}
```

## GET

### Buscar receitas(paginação)

* URL: https://domain/search-recipes

* Body:
```
{
  name: string
  servings?: ("até 2" | "até 4" | "até 6" | "até 10" | "mais de 10")[]
  difficulty?: ("fácil" | "médio" | "difícil")[]
  preparationTime?:(
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas")[]
  category?:(
    | "acompanhamento"
    | "bebida"
    | "bolos"
    | "carnes"
    | "comidas fitness"
    | "comidas típicas"
    | "doces e sobremesas"
    | "frango"
    | "lanches"
    | "massas"
    | "molhos"
    | "peixes"
    | "petiscos"
    | "pratos principais"
    | "sopas"
    | "temperos"
    | "tortas")[]
  moreLikes?: boolean
  moreComments?: boolean
  latest?: boolean
}
```

* Retorno:
```
{ recipes: Recipe[] }
```

* Erros:
  * Nenhum parâmetro de busca informado

### Buscar receitas aleatórias(paginação)

* URL: https://domain/search-recipes/random

* Retorno:
```
{
  recipes: Recipe[]
}
```

### Buscar receitas de usuário(paginação)

* URL: https://domain/search-recipes/user/:user-id

* Retorno:
```
{
  recipes: Recipe[]
}
```

* Erros:
  * Usuário não encontrado

### Comentários de receita(paginação)

* URL: https://dominio/search-recipes/comments/:recipe-id

* Retorno
```
{
  comments: Comment[]
}
```

* Erros:
  * Receita não encontrada

### Comentários de usuário em receitas(paginação)

* URL: https://dominio/users/comments/:user-id

* Retorno
```
{
  comments: Comment[]
}
```

* Erros:
  * Usuário não encontrado

### Informações de usuário

* URL: https://domain/users/:user-id

* Retorno:
```
{
  error: false
  message: 'Usuário encontrado'
  user: {
    id: string
    name: string
    username: string
    avatarUrl: string
    description: string
    createAccountAt: string
    lastSessionAt: string
  }
}
```

* Erros:
  * Parâmetros faltando
  * Usuário não encontrado

### Feed de usuário(paginação)

* URL: https://domain/users/feed/:user-id

* Retorno:
```
{
  title: string
  description: string
  date: string
}
```

* Erros:
  * Usuário não encontrado

### Receitas curtidas de usuário(paginação)

* URL: https://domain/users/recipes-liked/:user-id

* Retorno:
```
{ recipes: Recipe[] }
```

* Erros:
  * Usuário não encontrado

## POST

### Sign-up user

* URL: https://domain/users

* Body:
```
{
  name: string
  username: string
  email: string
  password: string
}
```

* Retorno:
```
{
  error: false
  message: 'Usuário criado com sucesso',
  user: {
    id: string
  }
}
```

* Erros:
  * Parâmetros faltando
  * Username não pode ser menor que 2 ou maior que 12 caracteres
  * Este username já existe
  * Este email já existe

### Sign-in user

* URL: https://domain/sessions

* Body:
```
{
  email: string
  password: string
}
```

* Retorno:
```
{
  error: false
  message: 'Usuário encontrado'
  user: {
    id: string
    name: string
    username: string
    email: string
    token: string
    avatarUrl: string
    description: string
    createdAt: string
    lastSessionAt: string
  }
}
```

* Erros:
  * Parâmetros faltando
  * Usuário não encontrado
  * Senha incorreta

### Adicionar receita(precisa de token)

* URL: https://domain/recipes

* Body:
```
{
  userId: string
  recipeName: string
  preparationTime:
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas"
  category:
    | "acompanhamento"
    | "bebida"
    | "bolos"
    | "carnes"
    | "comidas fitness"
    | "comidas típicas"
    | "doces e sobremesas"
    | "frango"
    | "lanches"
    | "massas"
    | "molhos"
    | "peixes"
    | "petiscos"
    | "pratos principais"
    | "sopas"
    | "temperos"
    | "tortas"
  ingredients: string[]
  servings: "até 2" | "até 4" | "até 6" | "até 10" | "mais de 10"
  difficulty: "fácil" | "médio" | "difícil"
  howToPrepare: string
  demoImages: string[]
  additionalInformation: string
}
```

* Retorno:
```
{
  error: false
  message: 'Receita cadastrada'
  recipe: Recipe
}
```

* Erros:
  * Usuário não encontrado
  * Nome da receita já está em uso por este usuário
  * Parâmetros faltando

### Adicionar comentário em receita(precisa de token)

* URL: https://domain/recipes/comments/:recipe-id

* Erros:
  * Receita não encontrada

## DELETE

### Deletar usuário(precisa de token)

* URL: https://domain/users/delete/:user-id

* Retorno:
```
{
  error: false
  message: 'Usuário deletado com sucesso'
  user: {
    id: string
  }
}
```

* Erros:
  * Usuário não encontrado

### Deletar comentário(precisa de token)

* URL: https://domain/users/delete-comment/:user-id

* Retorno:
```
{
  error: false
  message: 'Usuário deletado com sucesso'
  user: {
    id: string
  }
}
```

* Erros:
  * Usuário não encontrado

### Deletar receita(precisa de token)

* URL: https://domain/recipes/delete/:recipe-id

* Retorno:
```
{
  error: false
  message: 'Receita deletada com sucesso'
  recipe: {
    id: string
  }
}
```

* Erros:
  * Usuário não encontrado
  * Receita não encontrada

## PUT

### Trocar senha(precisa de token)

* URL: https://domain/users/change-password/:username

* Retorno:
```
{
  error: false
  message: 'A nova senha enviada para o seu email'
  user: {
    id: string
    name: string
    username: string
    email: string
  }
}
```

* Erros:
  * Usuário não encontrado

### Modificar receita(precisa de token)

* URL: https://domain/recipes/:user-id/:recipe-id

* Body:
```
{
  preparationTime:
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas"
  category:
    | "acompanhamento"
    | "bebida"
    | "bolos"
    | "carnes"
    | "comidas fitness"
    | "comidas típicas"
    | "doces e sobremesas"
    | "frango"
    | "lanches"
    | "massas"
    | "molhos"
    | "peixes"
    | "petiscos"
    | "pratos principais"
    | "sopas"
    | "temperos"
    | "tortas"
  ingredients: string[]
  optionalIngredients: string[]
  servings: "até 2" | "até 4" | "até 6" | "até 10" | "mais de 10"
  difficulty: "fácil" | "médio" | "difícil"
  howToPrepare: string
  demoImages: string[]
  additionalInformation: string
}
```

* Retorno:
```
{
  erro: false
  message: 'Receita foi atualizada com sucesso'
  recipe: {
    id: string
  }
}
```

* Erros:
  * Usuário não encontrado
  * Receita não encontrada
  * Nenhum parâmetro para update foi informado

### Remover/adicionar curtida em receita(precisa de token)

* URL: https://domain/recipes/like/:recipe-id

* Erros:
  * Receita não encontrada
