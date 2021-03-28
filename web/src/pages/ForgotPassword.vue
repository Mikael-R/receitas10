<template>
	<div>
		<form class="card">
			<h2 class="title">Esqueceu sua senha?</h2>
			<span class="subtitle">
				Insira seu email que lhe enviaremos uma senha TEMPORARIA
			</span>
			<hr class="hr" />
			<input
				class="input form-control"
				type="email"
				placeholder="Email"
				v-model="valueEmail"
			/>
			<button class="button-sing-up" @enviar="submit()">Enviar</button>
		</form>
		<Footer />
	</div>
</template>

<script>
import Footer from '../components/Footer'
export default {
	components: {
		Footer
	},
	data() {
		return {
			valueNome: null,
			valueEmail: '',
			valueSenha: '',
			validNome: '',
			cadastrado: true
		}
	},
	methods: {
		submit() {
			this.$router.push('login')
		},
		voltar() {
			this.$router.push('login')
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
	margin-left: 10px;
}

.hr {
	border: 1px solid rgba(0, 0, 0, 0.3);
	transform: rotate(0.15deg);
	margin: 10px 25px;
}

.card {
	max-width: 512px;
	max-height: 380px;
	border-radius: 8px;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	background: #e3d8b4;
	margin: 80px auto;
	padding: 10px 10px;
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
	margin: 20px auto;
	font-size: 22px;
}
.button-sing-up:hover,
.button-sing-up:focus {
	border: 1px solid #fcad26;
}
</style>
