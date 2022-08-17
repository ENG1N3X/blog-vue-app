module.exports.getUserPosts = (req, res) => {
  console.log(req.params.id);

  res.send("Hello World!")
  // try {
  //   const product = await Product.findById(req.params.id)
  //   res.status(200).json(product)
  // } catch (error) {
  //   res.status(500).json({ message: 'Не удалось полуичть элемент!', error })
  // }
}