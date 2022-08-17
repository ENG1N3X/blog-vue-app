<template>
	<div id="app">
		<div id="nav" class="text-center p-7">
			<router-link to="/" class="font-bold">Home</router-link>
		</div>
		<router-view />
	</div>
</template>

<style lang="scss">
#nav {
	a {
		&.router-link-exact-active {
			color: #42b983;
		}
	}
}
</style>
