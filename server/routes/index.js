const Router = require("express");
const router = new Router();
const brandRouter = require("./brandRouter");
const userRouter = require("./userRouter");
const typeRouter = require("./typeRouter");
const deviceRouter = require("./deviceRouter");

router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/device", deviceRouter);

module.exports = router;
