import Vue from 'vue'
import Router from 'vue-router'

import SingIn from './pages/SingIn.vue'
import Home from './pages/Home.vue'
import SingUp from './pages/SingUp.vue'
import ForgotPassword from './pages/ForgotPassword.vue'
import Profile from './pages/Profile.vue'
import SendRecipe from './pages/SendRecipe.vue'
import ViewRecipe from './pages/ViewRecipe.vue'

import userRepository from './repositories/user'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
			name: 'Sing-In',
			path: '/sing-in',
			alias: ['/login', '/entrar'],
			component: SingIn
		},
		{
			name: 'Home',
			path: '/',
			alias: ['/home', '/pagina-inicial', '/inicio'],
			component: Home
		},
		{
			name: 'Sing-Up',
			path: '/sing-up',
			alias: ['/registro', '/cadastro', '/criar-conta'],
			component: SingUp
		},
		{
			name: 'Forgot Password',
			path: '/forgot-password',
			alias: ['/esqueci-senha', '/recuperar-senha'],
			component: ForgotPassword
		},
		{
			name: 'Send Recipe',
			path: '/send-recipe',
			alias: ['/new-recipe', '/enviar-receita', '/nova-receita'],
			component: SendRecipe,
			meta: {
				requiresAuth: true
			}
		},
		{
			name: 'Profile',
			path: '/profile/:username',
			alias: ['/perfil/:username'],
			component: Profile
		},
		{
			name: 'View Recipe',
			path: '/recipe/:username/:recipeName',
			alias: ['/receita/:username/:recipeName'],
			component: ViewRecipe
		}
	]
})

router.beforeEach(async (to, from, next) => {
	let user
	try {
		user = JSON.parse(localStorage.getItem('user'))
	} catch {
		user = null
	}

	const goToLogin = () =>
		next({
			path: '/login',
			params: { nextUrl: to.fullPath }
		})

	if (to.meta.requiresAuth) {
		if (user === null) goToLogin()
		else {
			try {
				const { isValid } = (
					await userRepository.isValid({
						id: user.id,
						name: user.name,
						username: user.username,
						email: user.email,
						token: user.token
					})
				).data.user

				if (isValid) next()
				else goToLogin()
			} catch {
				goToLogin()
			}
		}
	} else {
		next()
	}
})

export default router
