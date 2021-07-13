const Posts = require("../models/postModel");
const Users = require("../models/userModel");
const Comments = require("../models/commentModel");
const { post } = require("../routes/adminRouter");


const adminCtrl = {
  getTotalUsers: async (req, res) => {
    try {
      const users = await Users.find();
      const total_users = users.length;
      res.json({ total_users });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getTotalPosts: async (req, res) => {
    try {
      const posts = await Posts.find();
      const total_posts = posts.length;
      res.json({ total_posts });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getTotalComments: async (req, res) => {
    try {
      const comments = await Comments.find();
      const total_comments = comments.length;
      res.json({ total_comments });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getTotalLikes: async (req, res) => {
    try {
      const posts = await Posts.find();
      let total_likes = 0;
      await posts.map((post) => (total_likes += post.likes.length));
      res.json({ total_likes });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getTotalSpamPosts: async (req, res) => {
    try {
      const posts = await Posts.find();
      
      const reportedPosts = await posts.filter(post => post.reports.length>2);
      const total_spam_posts = reportedPosts.length;
      res.json({ total_spam_posts });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getSpamPosts: async (req, res) => {
    try {
      const posts = await Posts.find()
        .select("user createdAt reports content")
        .populate({ path: "user", select: "username avatar email" });
      const spamPosts = posts.filter((post) => post.reports.length > 1);
      
      res.json({ spamPosts });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteSpamPost: async (req, res) => {
    try {
      const post = await Posts.findOneAndDelete({
        _id: req.params.id,
      });

      await Comments.deleteMany({ _id: { $in: post.comments } });

      res.json({ msg: "Post deleted successfully." });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = adminCtrl;