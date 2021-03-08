import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

import userRepository from '../repository/user-repository'
import generateToken from '../tools/generateToken'

class UserController {
  async store(req: Request, res: Response) {
    const { name, username, email, password } = req.body
    if (!name || !username || !email || !password)
      return res
        .status(422)
        .json({ error: true, message: 'Parâmetros faltando' })
    if (username.length < 2 || username.length > 12)
      return res.status(403).json({
        error: true,
        message: 'Username não pode ser menor que 2 ou maior que 12 caracteres',
      })

    const existsUsername = await userRepository.existsUsername(username)
    if (existsUsername)
      return res
        .status(409)
        .json({ error: true, message: 'Este username já existe' })
    const existsEmail = await userRepository.existsEmail(email)
    if (existsEmail)
      return res
        .status(409)
        .json({ error: true, message: 'Este email já existe' })

    const userId = uuidv4()
    const passwordHash = await bcrypt.hash(password, 8)
    const token = await generateToken({ userId }, process.env.APP_SECRET)

    await userRepository.createUser({
      id: userId,
      username,
      name,
      email,
      passwordHash,
      token,
    })

    return res.status(201).json({
      error: false,
      message: 'Usuário criado com sucesso',
      user: {
        id: userId,
      },
    })
  }

  async show(req: Request, res: Response) {
    const { username } = req.query
    if (!username || typeof username !== 'string')
      return res
        .status(422)
        .json({ error: true, message: 'Parâmetros faltando' })

    const user = await userRepository.findByUsername(username)
    if (!user) {
      return res
        .status(404)
        .json({ error: true, message: 'Usuário não encontrado' })
    }

    res.json({
      error: false,
      message: 'Usuário encontrado',
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        avatarUrl: user.avatar_url,
        description: user.description,
        createAccountAt: user.created_at,
        lastSessionAt: user.last_session_at,
      },
    })
  }
}

export default new UserController()
