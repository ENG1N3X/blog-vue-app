<template>
	<div>
		<p v-if="userListStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="userListStore.isLoading">
			<div class="animate-spin h-5 w-5 mx-auto border border-red-600 rounded-full border-r-0"></div>
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
import { useUserListStore } from "../stores/userListStore"
import { usePostListStore } from "../stores/postListStore"

export default {
	name: "UserList",
	setup() {
		const userListStore = useUserListStore()
		const postListStore = usePostListStore()
		return { userListStore, postListStore }
	},
	computed: {
		userList: function () {
			return this.userListStore.getUserList
		},
	},
	methods: {
		onChange(e) {
			const value = e.target.value
			if (value == "all") {
				this.postListStore.loadPostList()
				return
			}
			console.log(e.target.value)
		},
	},
	created() {
		this.userListStore.loadUserList()
	},
}
</script>
