<template>
	<div>
		<p v-if="postsStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="postsStore.isLoading">
      <div class="animate-spin h-5 w-5 mx-auto border border-black rounded-full border-r-0"></div>
    </div>
		<div v-else>
      <div class="flex flex-wrap">
        <h1 class="w-full text-center">All Posts</h1>
        <PostItem v-for="post in postList" :key="post.id" :post="post" />
      </div>
    </div>
	</div>
</template>

<script>
import PostItem from "./PostItem.vue"
import { usePostsStore } from '../stores/postsStore'

export default {
	name: "PostList",
  components: {
    PostItem
  },
  setup() {
    const postsStore = usePostsStore()
    return { postsStore }
  },
  computed: {
    postList: function() {
      return this.postsStore.getPostList
    }
  },
	methods: {},
	created() {
		this.postsStore.loadPostList()
	},
}
</script>
