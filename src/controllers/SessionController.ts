import 'dotenv/config'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'

// import User from '../models/User'

class SessionController {
  async store (req: Request, res: Response) {
    const { email, password } = req.body

    const user = {
      id: 'id-teste',
      email: 'mikael@mail.com',
      passwordHash: ''
    } // procura o user no banco pelo email

    if (!user) return res.status(404).send('User not found')

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)

    // if (!isPasswordCorrect) return res.status(401).send('Wrong password')

    return res.json({
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET, {
        expiresIn: '7d'
      })
    })
  }
}

export default new SessionController()
