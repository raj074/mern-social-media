const router = require("express").Router();
const auth = require("../middleware/auth");
const userCtrl = require("../controllers/userCtrl");

router.use(auth);

router.get("/search", userCtrl.searchUser);

router.get("/user/:id", userCtrl.getUser);

router.patch("/user", userCtrl.updateUser);

router.patch("/user/:id/follow", userCtrl.follow);
router.patch("/user/:id/unfollow", userCtrl.unfollow);

router.get("/suggestionsUser", userCtrl.suggestionsUser);

module.exports = router;
