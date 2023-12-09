const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });
const expenseController = require("../controllers/expense");

router.post("/create", expenseController.create);
router.get("/all", expenseController.all);
router.get("/bydate", expenseController.byDate);
module.exports = router;
