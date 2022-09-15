const express = require("express");
const router = express.Router();
const controller = require("../controllers/taps.controller");

router.get("/taplistbyclient", controller.taplistbyclient);
router.get("/taplistbyworker", controller.taplistbyworker);
router.get("/taplistbyorder", controller.taplistbyorder);
router.get("/taplist/:tap_id", controller.taplistbytapid);
router.get("/getlatesttapnum", controller.getlatesttapnum);
router.post("/newtap", controller.newtap);
router.patch("/updatetap",controller.updatetap);
router.delete("/deletetap",controller.deletetap);

module.exports = router;