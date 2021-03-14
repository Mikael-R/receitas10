import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'

import generateToken from '../tools/generateToken'
import ValidToken from '../tools/ValidToken'
import userRepository from '../repository/user-repository'

class SessionController {
  async store(req: Request, res: Response) {
    const { email, password } = req.body
    if (!email || !password) {
      return res
        .status(422)
        .json({ error: true, message: 'Parâmetros faltando' })
    }

    const user = await userRepository.findByEmail(email)
    if (!user) {
      return res
        .status(404)
        .json({ error: true, message: 'Usuário não encontrado' })
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)
    if (!isPasswordCorrect)
      return res.status(401).json({ error: true, message: 'Senha incorreta' })

    const validToken = new ValidToken(user.token, process.env.APP_SECRET)
    if (!validToken.isValid) {
      user.token = await generateToken(
        { userId: user.id },
        process.env.APP_SECRET
      )

      await userRepository.updateUserToken(user.id, user.token)
    }

    await userRepository.updateUserLastSessionDate(user.id)

    return res.status(200).json({
      error: false,
      message: 'Usuário encontrado',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        token: user.token,
        avatarUrl: user.avatarUrl,
        description: user.description,
        createdAt: user.createdAt,
        lastSessionAt: user.lastSessionAt,
      },
    })
  }
}

export default new SessionController()
