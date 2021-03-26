import jwt from 'jsonwebtoken'

import { TokenPayload } from './generateToken'

class ValidToken {
	constructor(private token: string, private APP_SECRET: string) {
		this.token = token
		this.APP_SECRET = APP_SECRET
	}

	get isValid() {
		try {
			jwt.verify(this.token, this.APP_SECRET)
			return true
		} catch (error) {
			return false
		}
	}

	get payload(): TokenPayload | null {
		try {
			const payload: TokenPayload = jwt.verify(
				this.token,
				this.APP_SECRET
			) as any

			return payload
		} catch (error) {
			return null
		}
	}
}

export default ValidToken
