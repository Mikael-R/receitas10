<template>
	<div class="nav-receitas">
		<router-link class="home" to="/">
			<img src="../assets/img/logoNav.png" alt="logo" />
		</router-link>
		<div class="search-recipe">
			<input
				type="text"
				placeholder="Encontre uma receita..."
				:disabled="disableSearch"
			/>
			<button :disabled="disableSearch">
				<img src="../assets/img/search.png" alt="icon-search" />
			</button>
		</div>
		<div class="send-recipe">
			<img src="../assets/img/shopping-list.png" alt="icon-shopping" />
			<router-link to="/enviar-receita"> ENVIE SUA RECEITA </router-link>
		</div>
		<div class="profile">
			<router-link :to="username ? `/perfil/${username}` : '/sing-in'">
				<img
					:src="avatarUrl || require('../assets/img/blanck.png')"
					alt="foto de perfil"
				/>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		disableSearch: Boolean
	},
	data() {
		return {
			username: '',
			avatarUrl: ''
		}
	},
	beforeMount() {
		const user = JSON.parse(localStorage.getItem('user') || '{}')
		this.username = user.username
		this.avatarUrl = user.avatarUrl
	}
}
</script>

<style scoped>
.nav-receitas {
	height: 60px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #e3d8b4;
}

.home:hover,
.search-recipe:hover,
.send-recipe img:hover,
.profile img:hover {
	cursor: pointer;
}

.send-recipe {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #c62828;
	font-size: 11px;
}
.send-recipe img {
	width: 26px;
	height: 29px;
}
.send-recipe a {
	color: #c62828;
}
.send-recipe a:hover {
	color: #c62828;
}

.search-recipe input {
	background: #fcf5e0;
	border: 1px solid rgba(198, 40, 40, 0.5);
	border-top-left-radius: 8px;
	border-bottom-left-radius: 8px;
	padding: 7px;
}
.search-recipe input:disabled {
	background: #ccc;
	cursor: not-allowed;
}

.search-recipe button {
	background: #fcf5e0;
	position: relative;
	border: 1px solid rgba(198, 40, 40, 0.5);
	border-top-right-radius: 8px;
	border-bottom-right-radius: 8px;
	margin-left: -2px;
	padding: 7px;
}
.search-recipe button:disabled {
	background: #ccc;
	cursor: not-allowed;
}

.search-recipe input:hover,
.search-recipe button:hover {
	border-color: rgba(198, 40, 40, 0.5);
}

.profile a img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
}

@media (max-width: 612px) {
	.home img {
		display: none;
	}
}
</style>
