<template>
	<div>
		<p v-if="postsStore.isError" class="text-center">Something went wrong!</p>
		<div v-else-if="postsStore.isLoading">
      <AjaxLoader/>
    </div>
		<div v-else>
      <div class="flex flex-wrap">
        <h1 class="w-full text-center">{{ postsStore.currentUserPosts.name }} Posts</h1>
        <PostItem v-for="post in postList" :key="post.id" :post="post" />
      </div>
    </div>
	</div>
</template>

<script>
import { usePostsStore } from '../stores/postsStore'

import PostItem from "./PostItem.vue"
import AjaxLoader from "./AjaxLoader.vue"

export default {
	name: "PostList",
  components: {
    PostItem,
    AjaxLoader
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
