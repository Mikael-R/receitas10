import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

import userRepository from '../repository/user-repository'

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
    const token = jwt.sign({ userId }, process.env.APP_SECRET, {
      expiresIn: '7d',
    })

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
      userId,
    })
  }
}

export default new UserController()
