import { NextFunction, Request, Response } from 'express'

import userRepository from '../repository/user-repository'
import ValidToken from '../tools/ValidToken'

export default async (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization
  if (!authorizationHeader)
    return res.status(401).json({ error: true, message: 'Token não informado' })

  const [, token] = authorizationHeader.split(' ')
  const validToken = new ValidToken(token, process.env.APP_SECRET)

  if (validToken.isValid) {
    const user = await userRepository.findById(validToken.payload.userId)
    if (!user)
      return res
        .status(401)
        .json({ error: true, message: 'Token inválido ou expirado' })

    req.userId = validToken.payload.userId

    return next()
  } else {
    return res
      .status(401)
      .json({ error: true, message: 'Token inválido ou expirado' })
  }
}
