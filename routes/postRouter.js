const router = require("express").Router();
const auth = require("../middleware/auth");
const postCtrl = require("../controllers/postCtrl");

router.use(auth);

router
  .route("/posts")
  .post( postCtrl.createPost)
  .get( postCtrl.getPosts);

router
  .route("/post/:id")
  .patch( postCtrl.updatePost)
  .get( postCtrl.getPost)
  .delete( postCtrl.deletePost);

router.patch("/post/:id/like",  postCtrl.likePost);
router.patch("/post/:id/unlike",  postCtrl.unLikePost);

router.patch("/post/:id/report",  postCtrl.reportPost);

router.get("/user_posts/:id",  postCtrl.getUserPosts);

router.get("/post_discover",  postCtrl.getPostDiscover);

router.patch("/savePost/:id",  postCtrl.savePost);
router.patch("/unSavePost/:id",  postCtrl.unSavePost);
router.get("/getSavePosts",  postCtrl.getSavePost);

module.exports = router;
