const express = require("express")
const postRoutes = require("./routes/posts.router.js")

const app = express()
const HOST = process.env.PORT ?? "localhost"
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/posts", postRoutes)

app.listen(PORT, HOST, () => {
	console.log(`Server listening on http://${HOST}:${PORT}`)
})
