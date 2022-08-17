import { defineStore } from "pinia"
import axios from "axios"

export const usePostsStore = defineStore("postsStore", {
	state: () => ({ postList: [], postData: null, currentUserPosts: { id: 0, name: "all" }, isLoading: true, isError: false }),
	getters: {
		getPostList(state) {
			return state.postList
		},
		getPostData(state) {
			return state.postData
		},
	},
	actions: {
		loadPostList() {
			this.isLoading = true
			this.isError = false
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
		loadPostData(postId, userId) {
			const urls = [`https://jsonplaceholder.typicode.com/users?id=${userId}`, `https://jsonplaceholder.typicode.com/posts?id=${postId}`, `https://jsonplaceholder.typicode.com/comments?postId=${postId}`]

			this.isLoading = true
			this.isError = false

			Promise.all(
				urls.map((url) =>
					axios({
						method: "get",
						url,
						responseType: "json",
					}),
				),
			)
				.then(([user, post, comments]) => {
					console.log("[POST PAGE] response", user, post, comments)
					if (!user.data.length || !post.data.length || !comments.data.length) {
						throw new Error("Empty data response")
					}
					this.postData = {
						user: user.data[0],
						post: post.data[0],
						comments: [...comments.data],
					}
					this.isLoading = false
				})
				.catch((error) => {
					console.log("Fetching error", error)
					this.isLoading = false
					this.isError = true
				})
		},
		loadUserPostList(userId) {
			this.isLoading = true
			this.isError = false

			axios({
				method: "get",
				url: `http://localhost:3000/api/posts/getUserPosts/${userId}`,
				responseType: "json",
			})
				.then((response) => {
					console.log("[USER POSTS] response", response)
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
