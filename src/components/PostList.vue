<template>
	<div>
		<p v-if="postListStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="postListStore.isLoading">
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
import { usePostListStore } from '../stores/postListStore'

export default {
	name: "PostList",
  components: {
    PostItem
  },
  setup() {
    const postListStore = usePostListStore()
    return { postListStore }
  },
  computed: {
    postList: function() {
      return this.postListStore.getPostList
    }
  },
	methods: {},
	created() {
		this.postListStore.loadPostList()
	},
}
</script>
