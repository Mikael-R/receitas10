import { Request, Response } from 'express'

class UserController {
  async store (req: Request, res: Response) {
    const { email, password } = req.body

    // verifica se o email ja está cadastrado
    // cadastra user no banco
    // salva apenas hash da senha
    // retorna id do usuário no banco

    const userId = 'id-teste'

    return res.json({ userId })
  }
}

export default new UserController()
