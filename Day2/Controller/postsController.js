const fs = require('fs/promises');

class PostsController {

  async createPost(req, res) {
    const { id, Title, Content } = req.body;

    if (!id || !Title || !Content) {
      return res.status(400).json({ message: "invalid data", status: "failed" });
    }

    let parsedPosts = [];

    try {
      const posts = await fs.readFile('posts.json', 'utf-8');
      parsedPosts = JSON.parse(posts);
    } catch (err) {
      if (err.code !== 'ENOENT') {
        return res.status(500).json({ message: "internal server error", status: "failed" });
      }
    }

    const newPost = { id, Title, Content };
    parsedPosts.push(newPost);

    await fs.writeFile('posts.json', JSON.stringify(parsedPosts, null, 2));
    res.status(201).json({
      message: "post created successfully", status: "success", data: newPost
    });
  }

  async getPosts(req, res) {
    try {
      const data = await fs.readFile('posts.json', 'utf-8');
      const parsedPosts = JSON.parse(data);
      res.status(200).json({
        message: "posts fetched successfully", status: "success", data: parsedPosts
      });
    } catch (err) {
      if (err.code === 'ENOENT') {
        return res.status(200).json({
          message: "no posts found", status: "success", data: []
        });
      }
      return res.status(500).json({ message: "internal server error", status: "failed" });
    }
  }

  async getPostById(req, res) {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({ message: "invalid data", status: "failed" });
    }

    try {
      const posts = await fs.readFile('posts.json', 'utf-8');
      const parsedPosts = JSON.parse(posts);
      const post = parsedPosts.find(post => post.id == id);

      if (!post) {
        return res.status(404).json({ message: "post not found", status: "failed" });
      }

      res.status(200).json({
        message: "post fetched successfully", status: "success", data: post
      });
    } catch (err) {
      return res.status(500).json({ message: "internal server error", status: "failed" });
    }
  }

  async updatePost(req, res) {
    const id = req.params.id;
    const { Title, Content } = req.body;

    if (!id || !Title || !Content) {
      return res.status(400).json({ message: "invalid data", status: "failed" });
    }

    try {
      const posts = await fs.readFile('posts.json', 'utf-8');
      const parsedPosts = JSON.parse(posts);
      const post = parsedPosts.find(post => post.id == id);

      if (!post) {
        return res.status(404).json({ message: "post not found", status: "failed" });
      }

      post.Title = Title;
      post.Content = Content;

      await fs.writeFile('posts.json', JSON.stringify(parsedPosts, null, 2));

      res.status(200).json({
        message: "post updated successfully", status: "success", data: post
      });
    } catch (err) {
      return res.status(500).json({ message: "internal server error", status: "failed" });
    }
  }

  async deletePost(req, res) {
    const id = req.params.id;

    if (!id) {
      return res.status(400).json({ message: "invalid data", status: "failed" });
    }

    try {
      const posts = await fs.readFile('posts.json', 'utf-8');
      const parsedPosts = JSON.parse(posts);
      const index = parsedPosts.findIndex(post => post.id == id);

      if (index === -1) {
        return res.status(404).json({ message: "post not found", status: "failed" });
      }

      const deleted = parsedPosts.splice(index, 1)[0];
      await fs.writeFile('posts.json', JSON.stringify(parsedPosts, null, 2));

      res.status(200).json({
        message: "post deleted successfully", status: "success", data: deleted
      });
    } catch (err) {
      return res.status(500).json({ message: "internal server error", status: "failed" });
    }
  }
}

module.exports = new PostsController();
