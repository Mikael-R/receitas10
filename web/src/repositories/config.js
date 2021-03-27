import axios from 'axios'

import { app } from '../main'

const api = axios.create({
	baseURL: 'http://localhost:3333'
})

api.interceptors.response.use(
	function (response) {
		return response
	},
	function (error) {
		if (error.response) {
			app.$bvToast.toast(error.response.data.message, {
				title: error.response.data.title,
				variant: 'danger',
				solid: true
			})
		} else {
			app.$bvToast.toast('Não foi possível processar a requisição', {
				title: 'Serviço indisponível',
				variant: 'danger',
				solid: true
			})
		}

		return Promise.reject(error)
	}
)

export default api
