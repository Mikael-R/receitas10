/* eslint-disable camelcase */
import connection from '../database/connection'

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
  last_login_at?: string
}

const createUser = ({
  id,
  username,
  name,
  email,
  passwordHash,
  token,
}: CreateUserProps) =>
  connection<UserEntity>('users').insert({
    id,
    username,
    name,
    email,
    password_hash: passwordHash,
    token,
  })

const existsEmail = async (email: string) =>
  !!(await connection<UserEntity>('users').where('email', email).first())?.id

const existsUsername = async (username: string) =>
  !!(await connection<UserEntity>('users').where('username', username).first())
    ?.id

const findById = (id: string) =>
  connection<UserEntity>('users').where('id', id).select('*').first()

const findByEmail = (email: string) =>
  connection<UserEntity>('users').where('email', email).select('*').first()

const updateUserLastLoginDate = (id: string) =>
  connection<UserEntity>('users')
    .where('id', id)
    .update('last_login_at', new Date().getTime())

export default {
  createUser,
  existsEmail,
  existsUsername,
  findById,
  findByEmail,
  updateUserLastLoginDate,
}
