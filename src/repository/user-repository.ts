import connection from '../database/connection'

interface CreateUserProps {
  id: string
  username: string
  name: string
  email: string
  passwordHash: string
  token: string
}

interface UserEntity extends CreateUserProps {
  avatarUrl?: string
  description?: string
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
    passwordHash,
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

export default {
  createUser,
  existsEmail,
  existsUsername,
  findById,
  findByEmail,
}
