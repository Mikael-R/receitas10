import axios from './config'

export default {
	userInfo: username => axios.get(`users/${username}`),

	register: ({ name, username, email, password }) =>
		axios.post('/users', {
			name,
			username,
			email,
			password
		}),

	login: (email, password) => axios.post('/sessions', { email, password }),

	isValid: ({ id, name, username, email, token }) =>
		axios.post(
			'/sessions/valid',
			{ id, name, username, email },
			{
				headers: {
					authorization: `Bearer ${token}`
				}
			}
		)
}
