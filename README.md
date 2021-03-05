# receita10-api

```typescript
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
```typescript
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
```typescript
type Return = Recipe[]
```

* ~~Errors:~~


### Informações de usuário

* URL: https://domain/user/:username

* Retorno:
```typescript
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
```typescript
type Return = Recipe[]
```

* Errors:
  * User not found

### Comentários em receitas

* URL: https://domain/comments/:username

* Retorno:
```typescript
type Return = { recipeURL: string, comment: string, data: Date }[]
```

* Errors:
  * User not found

### Receitas de usuário

* URL: https://domain/recipes/:username

* Retorno:
```typescript
type Return = Recipe[]
```

* Errors:
  * User not found

### Receita especifica de usuário

* URL: https://domain/:username/:recipeName

* Retorno:
```typescript
type Return = Recipe
```

* Errors:
  * User not found
  * Recipe not found

## POST

### Cadastrar user

* URL: https://domain/users

* Body:
```typescript
interface Body {
  name: string
  email: string
  password: string
}
```

* Return:
```typescript
interface Return { userId: string}
```

* Error:
  * Email already used

### Logar user(pegar token)

* URL: https://domain/sessions

* Body:
```typescript
interface Body {
  email: string
  password: string
}
```

* Return:
```typescript
interface Return {
  token: string
}
```

* Errors:
  * User not found

### Trocar senha

* URL: https://domain/changePassword/:username

* Body:
```typescript
interface Body {
  email: string
  password: string
}
```

* Retorno:
```typescript
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Errors:
  * User not found

### Adicionar receita

* URL: https://domain/recipe/:username/:nome-da-receita

* Body:
```typescript
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
```typescript
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
```typescript
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Errors:
  * User not found
  * Recipe not found

## PUT

### Modificar receita

* URL: https://domain/recipe/:username/:nome-da-receita

* Body:
```typescript
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
```typescript
interface Return { message: string, errors: { attribute: string, message: string }[] }
```

* Erro:
  * User not found
  * Recipe not found
  * Need information

