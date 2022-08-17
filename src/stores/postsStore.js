import { defineStore } from "pinia"
import axios from "axios"

export const usePostsStore = defineStore("postsStore", {
	state: () => ({ postList: [], isLoading: true, isError: false }),
	getters: {
		getPostList(state) {
			return state.postList
		},
	},
	actions: {
		loadPostList() {
			this.isLoading = true
			axios({
				method: "get",
				url: "https://jsonplaceholder.typicode.com/posts?_limit=20",
				responseType: "json",
			})
				.then((response) => {
					console.log("[POSTS] response", response)
					this.postList = response.data
					this.isLoading = false
				})
				.catch((error) => {
					console.log("Fetching error", error)
					this.isLoading = false
					this.isError = true
				})
		},
	},
})
