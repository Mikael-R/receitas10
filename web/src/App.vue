<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body,
input {
	font-family: 'Poppins', sans-serif;
}

#app {
	font-family: 'Poppins', sans-serif;
	background: #ffefc0;
	width: 100vw;
	height: 100vh;

	overflow: auto;
}

.animeLeft {
	opacity: 0;
	transform: translateX(-20px);
	animation: animeLeft 0.5s forwards;
}
@keyframes animeLeft {
	to {
		opacity: 1;
		transform: initial;
	}
}
</style>
