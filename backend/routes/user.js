const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });
const userController = require("../controllers/user");

router.post(
  "/create",
  // passport.authenticate("jwt", { session: false }),
  userController.create
);

router.post(
  "/sendmail",
  // passport.authenticate("jwt", { session: false }),
  userController.sendmail
);
router.post("/login", userController.login);
router.post("/addfriend",userController.addfriend);
router.post("/getFriends",userController.getFriends);
const passport = require("passport");

router.post(
  "/update",
  passport.authenticate("jwt", { session: false }),
  userController.update
);
router.post(
  "/image_upload",
  upload.single("file"),
  passport.authenticate("jwt", { session: false }),
  userController.imageUpload
);
router.get(
  "/get_image",
  passport.authenticate("jwt", { session: false }),
  userController.getImage
);
router.get(
  "/loggedin",
  passport.authenticate("jwt", { session: false }),
  userController.getUser
);
router.get(
  "/delete_image",
  passport.authenticate("jwt", { session: false }),
  userController.deleteImage
);

router.post("/reset_password", userController.sendResetMail);

router.post(
  "/get_profile",
  passport.authenticate("jwt", { session: false }),
  userController.get_profile
); //get individual profile of any user

module.exports = router;