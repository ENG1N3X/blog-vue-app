<template>
	<div>
		<p v-if="usersStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="usersStore.isLoading">
			<AjaxLoader/>
		</div>
		<div v-else>
			<select class="border border-black p-2" @change="onChange">
				<option value="all" selected>All</option>
				<option v-for="user in userList" :key="user.id" :value="user.id">{{ user.name }}</option>
			</select>
		</div>
	</div>
</template>

<script>
import { useUsersStore } from "../stores/usersStore"
import { usePostsStore } from "../stores/postsStore"

import AjaxLoader from "./AjaxLoader.vue"

export default {
	name: "UserList",
	components: {
		AjaxLoader
	},
	setup() {
		const usersStore = useUsersStore()
		const postsStore = usePostsStore()
		return { usersStore, postsStore }
	},
	computed: {
		userList: function () {
			return this.usersStore.getUserList
		},
	},
	methods: {
		onChange(e) {
			const value = e.target.value
			if (value == "all") {
				this.postsStore.loadPostList()
				return
			}
			console.log(e.target.value)
		},
	},
	created() {
		this.usersStore.loadUserList()
	},
}
</script>
