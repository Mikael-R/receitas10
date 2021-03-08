/* eslint-disable camelcase */
import knex from '../database/connection'

interface CreateUserProps {
  id: string
  username: string
  name: string
  email: string
  passwordHash: string
  token: string
}

interface UserEntity {
  id: string
  username: string
  name: string
  email: string
  password_hash: string
  token: string
  avatar_url?: string
  description?: string
  created_at: string
  updated_at: string
  last_session_at?: string
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
    password_hash: passwordHash,
    token,
  })

const existsEmail = async (email: string) =>
  !!(await knex<UserEntity>('users').where('email', email).first())?.id

const existsUsername = async (username: string) =>
  !!(await knex<UserEntity>('users').where('username', username).first())?.id

const findById = (id: string) =>
  knex<UserEntity>('users').where('id', id).select('*').first()

const findByEmail = (email: string) =>
  knex<UserEntity>('users').where('email', email).select('*').first()

const findByUsername = (username: string) =>
  knex<UserEntity>('users').where('username', username).select('*').first()

const updateUserLastSessionDate = (id: string) =>
  knex<UserEntity>('users')
    .where('id', id)
    .update('last_session_at', new Date().getTime())

const updateUserToken = (id: string, token: string) =>
  knex<UserEntity>('users').where('id', id).update('token', token)

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
