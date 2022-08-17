import { defineStore } from "pinia"
import axios from "axios"

export const useUserListStore = defineStore("userListStore", {
	state: () => ({ userList: [], isLoading: true, isError: false }),
	getters: {
		getUserList(state) {
			return state.userList
		},
	},
	actions: {
		loadUserList() {
			this.isLoading = true
			axios({
				method: "get",
				url: "https://jsonplaceholder.typicode.com/users?_limit=20",
				responseType: "json",
			})
				.then((response) => {
					console.log("[USERS] response", response)
					this.userList = response.data
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
