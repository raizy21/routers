import Post from "../models/Posts.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({ include: User });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const {
      body: { title, content, userId },
    } = req;
    if (!title || !content || !userId)
      return res
        .status(400)
        .json({ error: "title, content, and userId are required" });
    const post = await Post.create(req.body);
    const user = await post.getUser();
    post.dataValues.user = user;
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPostById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const post = await Post.findByPk(id, { include: User });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const {
      body: { title, content, userId },
      params: { id },
    } = req;
    if (!title || !content || !userId)
      return res
        .status(400)
        .json({ error: "title, content, and userId are required" });
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    await post.update(req.body);
    const user = await post.getUser();
    post.dataValues.user = user;
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const post = await Post.findByPk(id);
    if (!post) return res.status(404).json({ error: "Post not found" });
    await post.destroy();
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
