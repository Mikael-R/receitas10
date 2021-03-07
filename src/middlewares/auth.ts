import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

import userRepository from '../repository/user-repository'

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization
  if (!token)
    return res.status(401).json({ error: true, message: 'Token não informado' })

  try {
    const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
      userId: string
    }

    const user = await userRepository.findById(userId)
    if (!user)
      return res
        .status(401)
        .json({ error: true, message: 'Token não pertence a nenhum usuário' })

    req.userId = userId

    return next()
  } catch (error) {
    return res.status(401).json({ error: true, message: 'Token inválido' })
  }
}
