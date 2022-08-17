const express = require("express")
const cors = require("cors")
const postRoutes = require("./routes/posts.router.js")

const app = express()
const HOST = process.env.HOST ?? "localhost"
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use("/api/posts", postRoutes)

app.listen(PORT, HOST, () => {
	console.log(`Server listening on http://${HOST}:${PORT}`)
})
