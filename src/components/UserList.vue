<template>
	<div>
		<p v-if="usersStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="usersStore.isLoading">
			<AjaxLoader />
		</div>
		<div v-else>
			<select class="w-full border border-black p-2" @change="onChange">
				<option value="all" :selected="postsStore.currentUserPosts.id == 0">All</option>
				<option v-for="user in userList" :key="user.id" :value="user.id" :data-name="user.name" :selected="postsStore.currentUserPosts.id == user.id">{{ user.name }}</option>
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
		AjaxLoader,
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
			if (value.toLowerCase() == "all") {
				this.postsStore.loadPostList()

				this.postsStore.$patch({ currentUserPosts: { id: 0, name: value } })
				return
			}

			this.postsStore.loadUserPostList(value)
			this.postsStore.$patch({ currentUserPosts: { id: value, name: e.target.querySelector(":checked").getAttribute("data-name") } })
		},
	},
	created() {
		this.usersStore.loadUserList()
	},
}
</script>
