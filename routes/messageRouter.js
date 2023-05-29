const router = require("express").Router();
const auth = require("../middleware/auth");
const messageCtrl = require("../controllers/messageCtrl");

router.use(auth);

router.post("/message", messageCtrl.createMessage);

router.get("/conversations", messageCtrl.getConversations);

router.get("/message/:id", messageCtrl.getMessages);

module.exports = router;
