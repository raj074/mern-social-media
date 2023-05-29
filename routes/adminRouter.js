const router = require("express").Router();
const auth = require("../middleware/auth");
const adminCtrl = require("../controllers/adminCtrl");

router.use(auth);

router.get("/get_total_users", adminCtrl.getTotalUsers);
router.get("/get_total_posts", adminCtrl.getTotalPosts);
router.get("/get_total_comments", adminCtrl.getTotalComments);
router.get("/get_total_likes", adminCtrl.getTotalLikes);
router.get("/get_total_spam_posts", adminCtrl.getTotalSpamPosts);
router.get("/get_spam_posts", adminCtrl.getSpamPosts);
router.delete("/delete_spam_posts/:id", adminCtrl.deleteSpamPost);

module.exports = router;
