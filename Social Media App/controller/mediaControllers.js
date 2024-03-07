const Post = require('../models/post');

exports.createPost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const post = await Post.create({ title, description });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
