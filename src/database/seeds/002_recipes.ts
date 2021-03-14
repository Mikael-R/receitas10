import { Knex } from 'knex'

import { RecipeEntity } from '../../repository/recipe-repository'

const recipes: RecipeEntity[] = [
  {
    id: '75fed72a-8742-4a25-97ea-e69542fc7de2',
    authorId: '06cfd544-6205-48a4-9b6a-a24eff360233',
    authorUsername: 'ratinho',
    authorName: 'Ratatui',
    name: 'macarrão-com-molho',
    category: 'massas',
    difficulty: 'fácil',
    howPrepare: `MACARRÃO:
  Coloque água para cozinhar com sal a gosto e um fio de óleo (para quem gosta de usar óleo no cozimento do macarrão). Quando a água estiver fervendo, coloque todo o pacote de macarrão e deixe cozinhar até chegar ao ponto de "ao dente". Escorra e reserve em uma travessa.

MOLHO:
  Refogue o alho com um pouco de azeite (o suficiente para untar o fundo da panela, não usando muito por que a calabresa solta gordura). Coloque a cebola e mexa até dourar.
  Coloque a calabresa, refogue bem e só depois coloque o molho pronto.
  Quando o molho estiver bem apurado, adicione o creme de leite aos poucos até ficar em um tom rosado. Espere ferver um pouco para apurar bem o gosto.
  Retire do fogo e arrume sobre o macarrão.
  Decore com azeitas e queijo ralado.`,
    ingredients:
      '1 pacote de macarrão tipo espaguete\n1/2 cebola picada\n03 dentes grandes de alho, picados (quantidade opcional)\nAzeitonas verdes (opcional)\nQueijo ralado\n2 caixa grande de molho pronto\n3 caixas de creme de leite\n3 calabresas cortadas em cubos',
    preparationTime: 'rápido',
    servings: 'até 8',
    additionalInformation:
      'Você também pode ralar um queijo em cima que fica uma delícia!',
    demoImages:
      'https://i.pinimg.com/originals/b5/66/86/b56686b6e1099ce565a04129e05e33da.jpg',
    likes: 343,
    createdAt: new Date().getTime(),
    updatedAt: null,
  },
  {
    id: '87c2d8cd-4f35-4ded-bfd3-b424dd532cfe',
    authorId: '5d7f0e48-9b1f-4f96-94ca-90d8a1c23e12',
    authorUsername: 'bobesponja',
    authorName: 'Bob Esponja',
    name: 'hambúrguer-de-siri',
    category: 'prato principal',
    difficulty: 'fácil',
    howPrepare: `Refogar a cebola e aipo em uma frigideira até ficarem translúcidos.

Em uma tigela, adicionar o tomilho, carne de siri bem limpa e espremida, os ovos e temperar com sal e pimenta.

Adicionar a farinha de rosca aos poucos, até ficar uma mistura mais firme.

Formatar quatro hambúrgueres e empanar na farinha de rosca.

Aquecer uma frigideira antiaderente com um fio de azeite de oliva.

Dourar os hambúrgueres por cerca de 2 minutos de cada lado.

Besuntar o pão com ketchup, mostarda e maionese à gosto.

Cobrir o hambúrguer com o queijo e levar à parte de baixo do pão.

Botar a cebola, picles, tomate e alface americana de acordo com a sua preferência.

Servir imediatamente.`,
    ingredients:
      '2 colheres de sopa de cebola picada\n2 colheres de sopa de aipo picado\n2 colheres de sopa de azeite de oliva\n1 colher de chá de tomilho\n400g de carne de siri ou kani kama (imitação de carne de carangueijo)\n2 ovos\n¾ de xicara de farinha de rosca\nSal e pimenta\n4 pães de hambúrguer\n8 fatias de queijo\nCebola roxa\nPicles\nTomate\nAlface americana\nKetchup\nMostarda\nMaionese',
    preparationTime: 'rápido',
    servings: 'até 2',
    additionalInformation: '',
    demoImages:
      'https://i.pinimg.com/originals/24/a6/10/24a6108c1a3aa2d442766bd95bc10a12.jpg',
    likes: 567,
    createdAt: new Date().getTime(),
    updatedAt: null,
  },
  {
    id: 'a206be70-a234-43fa-8f8e-17fe1f1c70c3',
    authorId: '31ffb9b1-818f-4727-b323-bcd1153e287f',
    authorUsername: 'anastacia',
    authorName: 'Tia Anastácia',
    name: 'bolinho-de-chuva',
    category: 'bolos',
    difficulty: 'médio',
    howPrepare: `Misture todos os ingredientes até obter uma massa cremosa e homogênea.

Deixe aquecer uma panela com bastante óleo para que os bolinhos possam boiar.

Quando o óleo estiver bem quente (180º C), com uma colher, comece a colocar pequenas quantidades de massa, e frite até que dourem por inteiro.

Coloque os bolinhos sobre papel absorvente e depois passe-os no açúcar com canela.`,
    ingredients:
      '2 ovos\n1 xícara de açúcar\n1 xícara (chá) de leite\n2 e 1/2 xícaras de farinha de trigo\n1 colher (sopa) de fermento em pó\n3 colheres (sopa) de açúcar para polvilhar\n1 colher (sopa) de canela para polvilhar\n1 litro de óleo para fritar',
    preparationTime: 'até 1 hora',
    servings: 'até 8',
    additionalInformation: '',
    demoImages:
      'https://i.pinimg.com/474x/9e/96/6d/9e966d84e64745f0a24985366878452e.jpg',
    likes: 259,
    createdAt: new Date().getTime() - 2628000000,
    updatedAt: new Date().getTime(),
  },
  {
    id: '1d5f80e1-d654-4326-bb5c-0553bdb8b584',
    authorId: '651659a4-5dfa-462f-a17d-67359b635079',
    authorUsername: 'florinda',
    authorName: 'Dona Florinda',
    name: 'churros',
    category: 'doces e sobremesas',
    difficulty: 'médio',
    howPrepare: `Aqueça a água em uma panela, abaixe o fogo e acrescente a margarina e o açúcar.

Mexa bem, até dissolver toda a margarina.

Acrescente aos poucos a farinha de trigo, mexendo sempre, até que a massa desprenda da panela.

Tire do fogo e acrescente os ovos um a um, mexendo bem até misturar toda a massa.

A seguir, coloque a massa num saco de confeiteiro com o bico em formato de pitanga, ou na forma própria para churros.

Aperte, já dentro da frigideira com o óleo quente, o tamanho fica a seu critério, corte com a ponta dos dedos ou com uma faca.
Depois de frito, coloque em papel toalha para que absorva a gordura.

Em seguida, passe pelo açúcar com canela e recheie com doce de leite usando o bico que já vem junto com a forma.`,
    ingredients:
      '250 ml de água\n2 colheres (sopa) de açúcar\n2 colheres (sopa) de margarina ou manteiga sem sal\n1 pitada de sal (se a margarina tiver sal, dispensar a pitada)\n300 g de farinha de trigo\n3 ovos\nóleo para fritar\naçúcar e canela misturados para passar os churros depois de fritos\ndoce de leite',
    preparationTime: 'até 1 hora',
    servings: 'até 6',
    additionalInformation: '',
    demoImages:
      'https://i.pinimg.com/564x/8a/23/bd/8a23bdd4f79d1585075f5c2f48dca07e.jpg',
    likes: 297,
    createdAt: new Date().getTime() - 2628000000,
    updatedAt: new Date().getTime(),
  },
]

exports.seed = async function (knex: Knex) {
  return knex<RecipeEntity>('recipes')
    .del()
    .then(function () {
      return knex<RecipeEntity>('recipes').insert(recipes)
    })
}
