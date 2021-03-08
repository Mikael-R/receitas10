import bcrypt from 'bcryptjs'
import { Request, Response } from 'express'

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

    const isPasswordCorrect = await bcrypt.compare(password, user.password_hash)
    if (!isPasswordCorrect)
      return res.status(401).json({ error: true, message: 'Senha incorreta' })

    const lastLoginAt = await userRepository.updateUserLastLoginDate(user.id)

    return res.status(302).json({
      error: false,
      message: 'Usuário encontrado',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        token: user.token,
        avatarUrl: user.avatar_url,
        description: user.description,
        createdAt: user.created_at,
        lastLoginAt,
      },
    })
  }
}

export default new SessionController()
