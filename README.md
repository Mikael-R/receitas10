# receita10-api

```json
type Comment = { username: string; content: string, postedAt: Date }

interface Recipe {
  preparationTime:
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas";
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
    | "tortas";
  ingredients: string[];
  optionalIngredients: string[];
  servings: "até 2" | "até 4" | "até 6" | "até 10" | "mais de 10";
  difficulty: "fácil" | "médio" | "difícil";
  howToPrepare: string;
  demoImages: string[];
  additionalInformation: string;
}

interface UserRecipe extends Recipe {
  username: string;
  likes: number;
  comments: Comment[];
  postedAt: Date;
}
```

## GET

### Buscar receitas

* URL: https://domain/searchRecipe

* Body:
```json
type Body =
  | { random: boolean }
  | {
      name: string;
      servings?: ("até 2" | "até 4" | "até 6" | "até 10" | "mais de 10")[];
      difficulty?: ("fácil" | "médio" | "difícil")[];
      preparationTime?:(
        | "rápido"
        | "até 1 hora"
        | "até 2 horas"
        | "até 4 horas"
        | "até 6 horas"
        | "mais de 6 horas")[];
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
        | "tortas")[];
      moreLikes?: boolean;
      moreComments?: boolean;
      latest?: boolean;
    };
```

* Retorno:
```json
type Return = Recipe[]
```

* ~~Errors:~~


### Informações de usuário

* URL: https://domain/user/:username

* Retorno:
```json
type Return = {
  name: string;
  username: string;
  email: string;
  avatar: string;
  description: string;
  createAccountAt: Date;
  feed: { title: string; description: string; data: Date; recipeURL: string }[];
};
```

* Errors:
  * User not found

### Receitas curtidas

* URL: https://domain/recipesLiked/:username

* Retorno:
```json
type Return = Recipe[]
```

* Errors:
  * User not found

### Comentários em receitas

* URL: https://domain/comments/:username

* Retorno:
```json
type Return = { recipeURL: string, comment: string, data: Date }[]
```

* Errors:
  * User not found

### Receitas de usuário

* URL: https://domain/recipes/:username

* Retorno:
```json
type Return = Recipe[]
```

* Errors:
  * User not found

### Receita especifica de usuário

* URL: https://domain/:username/:recipeName

* Retorno:
```json
type Return = Recipe
```

* Errors:
  * User not found
  * Recipe not found

## POST

### Sign-up user

* URL: https://domain/users

* Body:
```
{
  name: String
  username: String
  email: String
  password: String
}
```

* Return:
```
{
  error: false
  message: 'Usuário criado com sucesso',
  userId: String,
}
```

* Errors:
  * Parâmetros faltando
  * Username não pode ser menor que 2 ou maior que 12 caracteres
  * Este username já existe
  * Este email já existe'

### Sign-in user

* URL: https://domain/sessions

* Body:
```
{
  email: String
  password: String
}
```

* Return:
```
{
  error: false,
  message: 'Usuário encontrado',
  user: {
    id: String,
    name: String,
    username: String,
    token: String,
    avatarUrl: String,
    description: String,
    createdAt: String,
    updatedAt: String
  },
    }
```

* Errors:
  * Parâmetros faltando
  * Usuário não encontrado
  * Senha incorreta

### Trocar senha

* URL: https://domain/changePassword/:username

* Body:
```json
interface Body {
  email: string
  password: string
}
```

* Retorno:
```json
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Errors:
  * User not found

### Adicionar receita

* URL: https://domain/recipe/:username/:nome-da-receita

* Body:
```json
interface Body {
  preparationTime:
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas";
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
    | "tortas";
  ingredients: string[];
  optionalIngredients: string[];
  servings: "até 2" | "até 4" | "até 6" | "até 10" | "mais de 10";
  difficulty: "fácil" | "médio" | "difícil";
  howToPrepare: string;
  demoImages: string[];
  additionalInformation: string;
}
```

* Retorno:
```json
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Errors:
  * User not found
  * Name already used
  * Need information

## DELETE

### Deletar receita

* URL: https://domain/recipe/:username/:nome-da-receita

* Retorno:
```json
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Errors:
  * User not found
  * Recipe not found

## PUT

### Modificar receita

* URL: https://domain/recipe/:username/:nome-da-receita

* Body:
```json
interface Body {
  preparationTime:
    | "rápido"
    | "até 1 hora"
    | "até 2 horas"
    | "até 4 horas"
    | "até 6 horas"
    | "mais de 6 horas";
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
    | "tortas";
  ingredients: string[];
  optionalIngredients: string[];
  servings: "até 2" | "até 4" | "até 6" | "até 10" | "mais de 10";
  difficulty: "fácil" | "médio" | "difícil";
  howToPrepare: string;
  demoImages: string[];
  additionalInformation: string;
}
```

* Retorno:
```json
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Erro:
  * User not found
  * Recipe not found
  * Need information

