const router = require("express").Router();
const auth = require("../middleware/auth");
const notifyCtrl = require("../controllers/notifyCtrl");

router.use(auth);

router.post("/notify", notifyCtrl.createNotify);

router.delete("/notify/:id", notifyCtrl.removeNotify);

router.get("/notifies", notifyCtrl.getNotifies);

router.patch("/isReadNotify/:id", notifyCtrl.isReadNotify);

router.delete("/deleteAllNotify", notifyCtrl.deleteAllNotifies);

module.exports = router;
