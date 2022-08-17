const { Router } = require("express")
const { getUserPosts } = require("../controllers/posts.controller.js")
const router = Router()

router.get("/getUserPosts/:id", getUserPosts)

module.exports = router
