const axios = require("axios")

module.exports.getUserPosts = (req, res) => {
	axios({
		method: "get",
		url: `https://jsonplaceholder.typicode.com/posts?userId=${req.params.id}&_limit=20`,
		responseType: "json",
	})
		.then((response) => {
			if (!response.data.length) {
				throw new Error("Empty data response")
				return
			}
			res.status(200).json(response.data)
		})
		.catch((error) => {
			res.status(500).json({ message: "Server fetching error", error })
		})
}
