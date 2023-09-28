const express = require("express"); //fetch the already present instance of express
const router = express.Router();

//adding controller
router.use("/users", require("./user"));

module.exports = router;
