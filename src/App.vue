<template>
	<div id="app" class="max-w-screen-xl w-full mx-auto px-4 py-8">
		<div class="flex flex-wrap">
			<div class="w-1/4 px-2">
				<UserList />
			</div>
			<div class="w-3/4 px-2">
				<PostList />
			</div>
		</div>
	</div>
</template>

<script>
import PostList from "./components/PostList.vue"
import UserList from "./components/UserList.vue"

export default {
	name: "App",
	components: {
		PostList,
		UserList,
	},
}
</script>
