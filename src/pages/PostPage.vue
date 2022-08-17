<template>
	<div class="max-w-screen-md mx-auto">
		<p v-if="postsStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="postsStore.isLoading">
			<div class="animate-spin h-5 w-5 mx-auto border border-black rounded-full border-r-0"></div>
		</div>
		<div v-else>
			<h1 class="mb-4">{{ postData.post.title }}</h1>
			<p>{{ postData.post.body }}</p>
			<hr />
			<div class="text-right p-5">
				<h3 class="mb-2">{{ postData.user.name }}</h3>
				<div class="">
					<a :href="'mailto:' + postData.user.email" class="btn primary mr-2">{{ postData.user.email }}</a>
					<a :href="'tel:' + postData.user.phone" class="btn primary mr-2">{{ postData.user.phone }}</a>
					<a :href="postData.user.website" target="_blank" class="btn primary">{{ postData.user.website }}</a>
				</div>
			</div>

			<hr />

			<div class="my-5">
				<h2 class="mb-2">Post Comments</h2>
				<div class="border-b border-black p-3 mb-2" v-for="comment in postData.comments" :key="comment.id">
					<h4 class="text-right">{{ comment.name }}</h4>
					<a :href="'mailto:' + comment.email" class="block text-right underline uppercase transition-opacity hover:opacity-80">{{ comment.email }}</a>

					<p class="mt-4">{{ comment.body }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { usePostsStore } from "../stores/postsStore"

export default {
	name: "PostPage",
	setup() {
		const postsStore = usePostsStore()
		return { postsStore }
	},
	computed: {
		postData: function () {
			return this.postsStore.getPostData
		},
	},
	created() {
		this.postsStore.loadPostData(this.$route.params.postid, this.$route.params.userid)
	},
}
</script>
