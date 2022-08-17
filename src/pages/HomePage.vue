<template>
	<div class="flex flex-wrap">
		<div class="w-1/5 px-2">
			<UserList />
		</div>
		<div class="w-4/5 px-2">
			<PostList />
		</div>
	</div>
</template>

<script>
import PostList from "../components/PostList.vue"
import UserList from "../components/UserList.vue"

export default {
	name: "HomePage",
	components: {
		PostList,
		UserList,
	},
}
</script>
