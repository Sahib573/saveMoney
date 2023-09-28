const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// const { use } = require("passport");

module.exports.register = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      let newuser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        category: req.body.category,
        zone: req.body.zone,
        address: req.body.address,
        contactNo: req.body.contactNo,
        dob: req.body.dob,
        income: req.body.income,
      });

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      newuser.password = hashedPassword;
      await newuser.save();
      return res.status(200).json({
        success: true,
        response: newuser,
        token: jwt.sign(newuser.toJSON(), process.env.JWT_KEY, {
          expiresIn: "2d",
        }),
      });
    } else {
      return res.status(200).send("User already exists");
    }
  } catch (err) {
    return res
      .status(200)
      .json({ message: "Error in creating user", success: false });
  }
};

module.exports.login = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email }).select("-avatar");

    if (!user) {
      return res.status(422).json({
        message: "invalid Credentials",
        success: false,
      });
    }
    const passwordsMatch = await bcrypt.compare(
      `` + req.body.password, //needed to make datatype forcefully string bc bcrypt recieves only string input
      user.password
    );
    if (!passwordsMatch) {
      return res
        .status(200)
        .json({ message: "Invalid Credentials", success: false });
    }
    return res.status(200).json({
      success: true,
      message: "login Successfull",
      token: jwt.sign(user.toJSON(), process.env.JWT_KEY, { expiresIn: "1d" }),
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .json({ message: "error in creating token", success: false });
  }
};
module.exports.update = async function (req, res) {
  try {
    console.log(req.user);
    return res.status(200).json({ message: "done update" });
  } catch (err) {
    return res
      .status(200)
      .json({ message: "error in creating token", success: false });
  }
};
module.exports.get = async function (req, res) {
  res.send("sahib");
};
