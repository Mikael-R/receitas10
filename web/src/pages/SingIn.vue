<template>
	<div>
		<div class="col logo">
			<img src="../assets/img/logo.png" alt="Logo" />
		</div>
		<div>
			<form class="col card animeLeft" @submit.prevent="handleSubmit()">
				<input
					type="email"
					class="input form-control"
					placeholder="Email"
					v-model="email"
					required
				/>
				<input
					type="password"
					class="input form-control"
					placeholder="Senha"
					v-model="password"
					required
				/>
				<button class="button-sing-in" type="submit">Entrar</button>
				<router-link class="forgot-password" to="/forgot-password"
					>Esqueceu sua senha?</router-link
				>
				<hr class="hr" />
				<button
					class="button-sing-up"
					type="button"
					@click="() => this.$router.push('sing-up')"
				>
					Criar conta
				</button>
			</form>
		</div>
		<Footer />
	</div>
</template>

<script>
import Footer from '../components/Footer'
import userRepository from '../repositories/user'
export default {
	components: {
		Footer
	},
	data() {
		return {
			email: '',
			password: ''
		}
	},
	methods: {
		async handleSubmit() {
			try {
				const { user } = (
					await userRepository.login(this.email, this.password)
				).data

				console.log(user)

				localStorage.setItem('user', JSON.stringify(user))

				this.$router.push('/')
			} catch {}
		}
	}
}
</script>

<style scoped>
hr {
	border: 1px solid rgba(0, 0, 0, 0.3);
	transform: rotate(0.15deg);
	margin: 0 25px;
}
.logo {
	text-align: center;
	margin-bottom: 45px;
}
.logo img {
	width: 480px;
	height: 360;
}
.card {
	width: 512px;
	height: 360px;
	border-radius: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	background: #e3d8b4;
	margin: auto;
}
.input {
	width: 95%;
	margin: auto;
	background: #fff8ea;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	font-size: 20px;
	line-height: 23px;
}
.button-sing-up {
	width: 45%;
	min-width: 140px;
	height: 55px;
	background: #f5cb4c;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	color: #fff8ea;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	margin: auto;
}
.button-sing-up:hover,
.button-sing-up:focus {
	border: 1px solid #fcad26;
}
.forgot-password {
	color: #597f93;
	margin: auto;
}
.button-sing-in {
	width: 95%;
	height: 55px;
	background: #597f93;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	color: #fff;
	font-style: normal;
	font-weight: 500;
	font-size: 22px;
	margin-left: auto;
	margin-right: auto;
}
.button-sing-in:hover,
.button-sing-in:focus {
	border: 1px solid #9cd0ec;
}

@media (max-width: 640px) {
	.logo img {
		width: 340px;
	}
}

@media (max-width: 516px) {
	.card {
		border-radius: 0px;
	}
}

@media (max-width: 350px) {
	.logo img {
		width: 300px;
	}
}
</style>
