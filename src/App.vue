<template>
	<div id="app" class="max-w-screen-2xl mx-auto px-4">
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
