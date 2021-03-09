import knex from '../database/connection'

interface CreateUserProps {
  id: string
  username: string
  name: string
  email: string
  passwordHash: string
  token: string
}

export interface UserEntity extends CreateUserProps {
  avatarUrl?: string
  description?: string
  createdAt: string
  updatedAt: string
  lastSessionAt?: string
}

const createUser = ({
  id,
  username,
  name,
  email,
  passwordHash,
  token,
}: CreateUserProps) =>
  knex<UserEntity>('users').insert({
    id,
    username,
    name,
    email,
    passwordHash,
    token,
  })

const existsEmail = async (email: string) =>
  !!(await knex<UserEntity>('users').where({ email }).first())?.id

const existsUsername = async (username: string) =>
  !!(await knex<UserEntity>('users').where({ username }).first())?.id

const findById = (id: string) =>
  knex<UserEntity>('users').where({ id }).select('*').first()

const findByEmail = (email: string) =>
  knex<UserEntity>('users').where({ email }).select('*').first()

const findByUsername = (username: string) =>
  knex<UserEntity>('users').where({ username }).select('*').first()

const updateUserLastSessionDate = (id: string) =>
  knex<UserEntity>('users')
    .where({ id })
    .update('lastSessionAt', new Date().getTime())

const updateUserToken = (id: string, token: string) =>
  knex<UserEntity>('users').where({ id }).update('token', token)

export default {
  createUser,
  existsEmail,
  existsUsername,
  findById,
  findByEmail,
  findByUsername,
  updateUserLastSessionDate,
  updateUserToken,
}