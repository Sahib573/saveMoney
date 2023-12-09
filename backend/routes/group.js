const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });
const groupController = require("../controllers/group");

router.post("/create", groupController.create);
router.post("/getGroups", groupController.getGroups);
// router.get("/bydate", groupController.byDate);
module.exports = router;
