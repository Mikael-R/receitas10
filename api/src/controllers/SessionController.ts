import bcrypt from 'bcryptjs'
import { NextFunction, Request, Response } from 'express'

import generateToken from '../tools/generateToken'
import ValidToken from '../tools/ValidToken'
import userRepository from '../repository/user-repository'

class SessionController {
	async store(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body
		if (!email || !password) {
			return res.status(422).json({
				error: true,
				title: 'Parâmetros faltando',
				message: 'Informe email e senha'
			})
		}

		const user = await userRepository.findByEmail(email)
		if (!user) {
			return res.status(404).json({
				error: true,
				title: 'Usuário não encontrado',
				message: 'Este email não está em uso'
			})
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash)
		if (!isPasswordCorrect)
			return res.status(401).json({
				error: true,
				title: 'Senha incorreta',
				message: 'Digite a senha correta'
			})

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
				lastSessionAt: user.lastSessionAt
			}
		})
	}

	async isValid(req: Request, res: Response) {
		const { id, name, username, email } = req.body

		const isValid = await userRepository.isValid({
			id,
			name,
			username,
			email
		})

		return res.json({
			error: false,
			message: isValid ? 'Usuário válido' : 'Usuário inválido',
			user: { isValid }
		})
	}
}

export default new SessionController()
