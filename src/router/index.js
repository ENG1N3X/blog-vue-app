import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/HomePage.vue"
import PostPage from "../pages/PostPage.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/post/:postid/user/:userid",
		name: "PostPage",
		component: PostPage,
	},
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
})

export default router
