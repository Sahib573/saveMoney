const express = require("express"); //fetch the already present instance of express
const router = express.Router();
// const passport = require("passport");
//adding controller

router.use("/user", require("./user"));
router.use("/expense", require("./expense"));
router.use("/group",require("./group"));
module.exports = router;