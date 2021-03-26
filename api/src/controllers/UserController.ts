import { Request, Response } from 'express'
import bcrypt from 'bcryptjs'
import { v4 as uuidv4 } from 'uuid'

import userRepository from '../repository/user-repository'
import generateToken from '../tools/generateToken'

class UserController {
	async store(req: Request, res: Response) {
		const { name, username, email, password } = req.body
		if (!name || !username || !email || !password)
			return res.status(422).json({
				error: true,
				title: 'Parâmetros faltando',
				message: 'Informe nome, username, email e senha'
			})
		if (username.length < 2 || username.length > 32)
			return res.status(403).json({
				error: true,
				title: 'Nome de usuário inválido',
				message:
					'Nome de usuário deve ser maior que 2 e menor que 32 caracteres'
			})

		const existsUsername = await userRepository.existsUsername(username)
		if (existsUsername)
			return res.status(409).json({
				error: true,
				title: 'Conflito',
				message: 'Este username já existe'
			})

		const existsEmail = await userRepository.existsEmail(email)
		if (existsEmail)
			return res.status(409).json({
				error: true,
				title: 'Conflito',
				message: 'Este email já existe'
			})

		const userId = uuidv4()
		const passwordHash = await bcrypt.hash(password, 8)
		const token = await generateToken({ userId }, process.env.APP_SECRET)

		await userRepository.createUser({
			id: userId,
			username,
			name,
			email,
			passwordHash,
			token
		})

		return res.status(201).json({
			error: false,
			message: 'Usuário criado com sucesso',
			user: {
				id: userId
			}
		})
	}

	async show(req: Request, res: Response) {
		const username = req.params.username

		const user = await userRepository.findByUsername(username)

		if (!user) {
			return res
				.status(404)
				.json({ error: true, message: 'Usuário não encontrado' })
		}

		res.status(200).json({
			error: false,
			message: 'Usuário encontrado',
			user: {
				id: user.id,
				name: user.name,
				username: user.username,
				avatarUrl: user.avatarUrl,
				description: user.description,
				createAccountAt: user.createdAt,
				lastSessionAt: user.lastSessionAt
			}
		})
	}

	async destroy(req: Request, res: Response) {
		const username = req.params.username

		const user = await userRepository.findByUsername(username)

		if (!user) {
			return res
				.status(404)
				.json({ error: true, message: 'Usuário não encontrado' })
		}

		await userRepository.deleteWithRecipesById(user.id)

		res.json({
			error: false,
			message: 'Usuário e todas as suas receitas foram deletadas',
			user: {
				id: user.id
			}
		})
	}
}

export default new UserController()
