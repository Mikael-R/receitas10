import jwt from 'jsonwebtoken'

interface CustomPayload {
  userId: string
}

export interface TokenPayload extends CustomPayload {
  iat: number
  exp: number
}

export default async (payload: CustomPayload, APP_SECRET: string) =>
  jwt.sign(payload, APP_SECRET, {
    expiresIn: '7d',
  })
