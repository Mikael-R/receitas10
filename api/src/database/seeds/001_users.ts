import { Knex } from 'knex'

import { UserEntity } from '../../repository/user-repository'

// token gerado com o APP_SECRET: &Vr76[Zq
const users: UserEntity[] = [
  {
    id: '06cfd544-6205-48a4-9b6a-a24eff360233',
    email: 'ratinho@mail.com',
    username: 'ratinho',
    name: 'Ratatui',
    passwordHash:
      '$2a$08$lELeqJ.l71iAWifwUMWWEedix350XwD6kZ8iSJSFyASLNfcSSI5z6',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIwNmNmZDU0NC02MjA1LTQ4YTQtOWI2YS1hMjRlZmYzNjAyMzMiLCJpYXQiOjE2MTU0ODc1NDYsImV4cCI6MTYxNjA5MjM0Nn0.GUNavNaAD-kMiRsOyvCs3mw3AtPOx7dqGx9wvOYEKKM',
    avatarUrl:
      'https://i.pinimg.com/originals/ad/d7/eb/add7eb1e0963fd7e9427a6a8fb1a7cc7.jpg',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    description:
      'Se somos aquilo que comemos, então só quero comer coisas boas.',
    lastSessionAt: new Date().getTime() + 300000,
  },
  {
    id: '5d7f0e48-9b1f-4f96-94ca-90d8a1c23e12',
    email: 'bobesponja@mail.com',
    username: 'bobesponja',
    name: 'Bob Esponja',
    passwordHash:
      '$2a$08$o9OTiGVNY0b0r5q40cwDcOH6SmdFgcrOCzAV1piM5FVb1LAfZCvXe',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZDdmMGU0OC05YjFmLTRmOTYtOTRjYS05MGQ4YTFjMjNlMTIiLCJpYXQiOjE2MTU0ODg0ODksImV4cCI6MTYxNjA5MzI4OX0.Sfs2Qi2USzTGLlgThVDDBxkPTnzMn0bsdGKrKiNKv3k',
    avatarUrl:
      'https://i.pinimg.com/564x/09/54/f0/0954f04b1b5ac07a3dc1a7d3dbde73ab.jpg',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    description:
      'Fazer brincadeiras entre amigos. Entre você e eu. Brincar em qualquer lugar. E qualquer hora. O fundo do mar é meu.',
    lastSessionAt: new Date().getTime() + 300000,
  },
  {
    id: '31ffb9b1-818f-4727-b323-bcd1153e287f',
    email: 'anastacia@mail.com',
    username: 'anastacia',
    name: 'Tia Anastácia',
    passwordHash:
      '$2a$08$g5PHxBqN7j.1NyflZfn9xOZtrRxnyVPw12f8o3vSZLr54iqb2eN7e',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMWZmYjliMS04MThmLTQ3MjctYjMyMy1iY2QxMTUzZTI4N2YiLCJpYXQiOjE2MTU1NDY1NDUsImV4cCI6MTYxNjE1MTM0NX0.-tyRUWeiADxQ6bxZR0PeWzFOkpcdBPV3NRvYF-LJyuw',
    avatarUrl:
      'https://i.pinimg.com/564x/51/16/0c/51160c6fd32545a517e820b01c3f8b93.jpg',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    description:
      'Marmelada de banana, bananada de goiaba, goiabada de marmelo.',
    lastSessionAt: new Date().getTime() + 300000,
  },
  {
    id: '651659a4-5dfa-462f-a17d-67359b635079',
    email: 'florinda@mail.com',
    username: 'florinda',
    name: 'Dona Florinda',
    passwordHash:
      '$2a$08$pZbgky.iiT3XTAQHmAA0xOuw1CZUVTws7TsXidQLJ1v4geMO6RTS2',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTE2NTlhNC01ZGZhLTQ2MmYtYTE3ZC02NzM1OWI2MzUwNzkiLCJpYXQiOjE2MTU1NDc4ODIsImV4cCI6MTYxNjE1MjY4Mn0.jWqYDRjVlUchS16EmUFEkwsghQubGyam5D5Vq3-3h64',
    avatarUrl:
      'https://i.pinimg.com/564x/8e/66/cc/8e66cce1924111a50dd4759c795951b4.jpg',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
    description: 'Gostaria de entrar e tomar uma xícara de café?',
    lastSessionAt: new Date().getTime() + 300000,
  },
]

exports.seed = async function (knex: Knex) {
  return knex<UserEntity>('users')
    .del()
    .then(function () {
      return knex<UserEntity>('users').insert(users)
    })
}
