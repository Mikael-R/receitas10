<template>
	<div>
		<div>
			<form
				class="card animeLeft"
				v-if="!registered"
				@submit.prevent="handleSubmit()"
			>
				<h2 class="title">Ter a sua conta</h2>
				<span class="subtitle">
					É rápido e fácil, após isso, você também pode adicionar descrição e
					foto para personalizar o seu perfil!
				</span>
				<hr class="hr" />
				<input
					class="input form-control"
					type="text"
					placeholder="Nome"
					v-model="name"
					required
				/>
				<input
					class="input form-control"
					type="text"
					placeholder="Nome de usuário"
					v-model="username"
					required
				/>
				<input
					class="input form-control"
					type="email"
					placeholder="Email"
					v-model="email"
					required
				/>
				<input
					class="input form-control"
					type="password"
					placeholder="Senha"
					v-model="password"
					required
				/>
				<button class="button-sing-up" type="submit">Criar conta</button>
			</form>
		</div>
		<div class="card-success" v-if="registered">
			<h2 class="title-success">Parabéns!</h2>
			<hr class="hr" />
			<p class="subtitle-success">
				Seu cadastro foi um sucesso!
				<br />
				Comece agora a participar dessa comunidade cheia de sabores!
			</p>
			<button
				class="button-success"
				@click="() => this.$router.push('sing-in')"
			>
				Voltar ao início
			</button>
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
			name: '',
			username: '',
			email: '',
			password: '',
			registered: false
		}
	},
	methods: {
		async handleSubmit() {
			try {
				await userRepository.register({
					name: this.name,
					username: this.username,
					email: this.email,
					password: this.password
				})
			} catch (error) {
				return this.$bvToast.toast('Este username ou email já existem.', {
					title: 'Whoops! A conta já existe.',
					variant: 'danger',
					solid: true
				})
			}

			this.registered = true
		}
	}
}
</script>

<style scoped>
.title {
	font-weight: 600;
	text-align: center;
	margin-top: 20px;
}

.subtitle {
	font-weight: 400;
	text-align: center;
}

.hr {
	border: 1px solid rgba(0, 0, 0, 0.3);
	transform: rotate(0.15deg);
	margin: 10px 25px;
}

.card {
	max-width: 512px;
	max-height: 520px;
	border-radius: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	background: #e3d8b4;
	margin: 80px auto;
}

.input {
	width: 95%;
	margin: 10px auto;
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
	margin: 20px auto;
	font-size: 22px;
}
.button-sing-up:hover,
.button-sing-up:focus {
	border: 1px solid #fcad26;
}

.card-success {
	max-width: 550px;
	max-height: 380px;
	border-radius: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	background: #e3d8b4;
	margin: 80px auto;
	padding: 10px 20px 20px 10px;
}

.title-success {
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 60px;
	text-align: left;
	margin-top: 10px;
	margin-bottom: -5px;
	padding-left: 20px;
}

.subtitle-success {
	font-size: 20px;
	text-align: left;
	line-height: 30px;
	padding-left: 20px;
}

.button-success {
	width: 40%;
	height: 65px;
	background: #f5cb4c;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	color: #fff8ea;
	margin-left: 55%;
	line-height: 26px;
	font-size: 20px;
}
.button-success:hover,
.button-success:focus {
	border: 1px solid #fcad26;
}

@media (max-width: 516px) {
	.card {
		border-radius: 0px;
	}
	.card-success {
		border-radius: 0px;
	}
}
</style>
