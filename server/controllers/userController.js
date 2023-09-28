const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
        token: jwt.sign(newuser.toJSON(), "13975sahib", { expiresIn: "2d" }),
      });
    } else {
      return res.status(200).send("User already exists");
    }
  } catch (err) {
    console.log("Error creating user: ", err);
    return res.status(500).send("Error in creating user");
  }
};

module.exports.login = async function (req, res) {
  try {
    let user = await User.findOne({ email: req.body.email }).select("-avatar");
    if (!user) {
      return res.status(422).json({
        message: "invalid username or category",
      });
    }
    const passwordsMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordsMatch) {
      return res.status(200).send("Invalid Credentials");
    }

    return res.status(200).json({
      success: true,
      token: jwt.sign(user.toJSON(), "13975sahib", { expiresIn: "1d" }),
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .send("error in creating jwt-token while creating session");
  }
};
module.exports.update = async function (req, res) {
  try {
    console.log(req.user);
    return res.status(200).json({ message: "done update" });
  } catch (err) {
    res.status(200).send("error in updating user");
  }
};
module.exports.get = async function (req, res) {
  res.send("sahib");
};
