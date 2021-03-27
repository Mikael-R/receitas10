<template>
	<footer>
		<img src="../assets/img/comida.png" alt="Faixa Comida" />
	</footer>
</template>

<style scoped>
footer {
	position: fixed;
	left: 0;
	bottom: 0;
}

footer img {
	width: 100%;
}

@media (max-width: 640px), (max-height: 640px) {
	footer {
		display: none;
	}
}
</style>
