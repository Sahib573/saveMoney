const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const fastcsv = require("fast-csv");

const { connection } = require("mongoose");
module.exports.sendmail = async (req, res) => {
  const { password, name, email, user_id } = req.body;
  // console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "sahib.ug20@nsut.ac.in",
      pass: "sahib123#*",
    },
  });
  const mailOptions = {
    from: "sahib.ug20@nsut.ac.in",
    to: email,
    subject: "Welcome to Our Application",
    text: `Hello ${name},\n\nWelcome to our application! Your account has been created successfully.\n\nYour login credentials:\nUser-Id: ${user_id}\nPassword: ${password}\n\nThank you!`,
  };
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "email sent successfully" });
  } catch (error) {
    console.log("Error sending email: ", error);
    res.status(200).json({ error: "Failed to send email" });
  }
};

module.exports.create = async function (req, res) {
  try {
    console.log("cvreate");
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      let newuser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        contactNo: req.body.contactNo,
      });
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      newuser.password = hashedPassword;
      await newuser.save();
      newuser.password = "";
      return res.status(200).json({ response: newuser });
    } else {
      return res.status(200).send("User already exists");
    }
  } catch (err) {
    console.log("Error creating user: ", err);
    return res.status(500).send("Error in creating user");
  }
};
module.exports.getUser = async function (req, res) {
  try {
    let user = await User.findOne({ _id: req.user._id });
    if (!user) {
      return res.json.status(422).json({
        message: "Invalid Credentials",
      });
    }
    const name = user.name,
      email = user.email,
      address = user.address,
      contact = user.contactNo,
      category = user.category,
      _id = user._id;
    const usr = user.toJSON();
    console.log(user.toJSON());
    return res.status(200).json({
      message: "success",
      data: {
        user_info: {
          user: usr,
          _id,
          name,
          email,
          address,
          contact,
          category,
        },
        token: jwt.sign(user.toJSON(), "bugetify123", { expiresIn: "1d" }),
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .send("error in creating jwt-token while creating session");
  }
};
module.exports.login = async function (req, res) {
  try {
    console.log("sahib");
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
      return res.status(200).send("password doesn't match");
    }
    console.log(user);

    const usr = user.toJSON();
    console.log(user.toJSON());
    return res.status(200).json({
      message: "sign in successful here is your token please keep it safe",
      user,
      token: jwt.sign(user.toJSON(), "sih1465", { expiresIn: "1d" }),
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .send("error in creating jwt-token while creating session");
  }
};
module.exports.addfriend = async function (req, res) {
  try {
    let Friend = await User.findOne({ email: req.body.friend_email }).select(
      "_id name email address contactNo"
    );
    if (!Friend) {
      return res.status(200).send("error in creating friend");
    }
    const newFriend = { frind_id: Friend._id, name:Friend.name, email:Friend.email, contactNo:Friend.contactNo, address:Friend.address };
    const friend_res = await User.findOne({ _id: req.body._id });
    if (friend_res) {
      for (let i = 0; i < friend_res.friends.length; i++) {
        if (friend_res.friends[i].frind_id.equals(newFriend.frind_id)) {
          return res.status(200).send("Friend already exists");
        }
      }
      friend_res.friends.push(newFriend);
      await friend_res.save();
      return res.status(200).json({ data: friend_res.friends });
    } else {
      res.status(200).send("error in creating friend");
    }
  } catch (err) {
    console.log(err);
    res.status(200).send("error in creating friend");
  }
};
module.exports.getFriends = async function (req, res) {
  try {
    const list = await User.findOne({ _id: req.body._id }).select("friends");
    return res.status(200).json({ data: list.friends });
  } catch (err) {
    res.status(200).send("error in updating user");
  }
};
module.exports.update = async function (req, res) {
  try {
    console.log("arrived");
    let user = await User.findOne({ user_id: req.user.user_id });
    if (user) {
      user.name = req.body.name;
      user.email = req.body.email;
      user.category = req.body.category;
      user.address = req.body.address;
      user.aadharCardNo = req.body.aadharCardNo;
      user.contactNo = req.body.contactNo;
      user.save();

      return res.status(200).json({ response: user });
    } else {
      return res.status(200).send("create user");
    }
  } catch (err) {
    res.status(200).send("error in updating user");
  }
};

module.exports.imageUpload = async function (req, res) {
  try {
    let user = await User.findOne({ user_id: req.user.user_id });
    if (!user) return res.status(200).send("user doesn't exists");
    user.avatar = req.file.buffer;
    user.save();
    return res.status(200).send("file uploaded successfully");
  } catch (err) {
    console.log(err);
    return res.status(200).send("error in uploading image");
  }
};

module.exports.getImage = async function (req, res) {
  try {
    let user = await User.findOne({ user_id: req.user.user_id });
    if (user.avatar) {
      return res.status(200).json({
        response: user.avatar,
      });
    } else {
      return res.status(200).send("avatar is not uploaded yet");
    }
  } catch (err) {
    console.log(err);
    return res.status(200).send("error in getting image");
  }
};

module.exports.deleteImage = async function (req, res) {
  try {
    let user = await User.findOne({ user_id: req.user.user_id });
    user.avatar = null;
    user.save();
    return res.status(200).send("profile image deleted successfully");
  } catch (err) {
    return res.status(200).send("error in deleting the image");
  }
};

module.exports.sendResetMail = async (req, res) => {
  try {
    let user = await User.findOne({ user_id: req.body.user_id });
    if (user) {
      if (!user.email) return res.status(200).send("email doesn't exists");
      // console.log(user.email);
      const newPassword = crypto.randomBytes(4).toString("hex");
      // console.log(newPassword);
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
      await user.save();
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "sahib.ug20@nsut.ac.in",
          pass: "sahib123#*",
        },
      });
      const mailOptions = {
        from: "sahib.ug20@nsut.ac.in",
        to: user.email,
        subject: "Reset Password",
        text: `Hello ${user.name},\n\nYou have your new password .\n\nYour login credentials:\nUser-Id: ${user.user_id}\nPassword: ${newPassword}\n\nThank you!`,
      };
      await transporter.sendMail(mailOptions);
      res
        .status(200)
        .json({ message: "User created and email sent successfully" });
    } else {
      return res.status(200).send("user doesn't exists");
    }
  } catch (error) {
    console.log("Error sending email: ", error);
    res.status(200).json({ error: "Failed to send email" });
  }
};

module.exports.get_profile = async function (req, res) {
  try {
    let profile = await User.findById(req.body.userId).select(
      "-password -avatar"
    ); //userId is objectId
    return res.status(200).json({
      response: profile,
    });
  } catch (err) {
    // console.log(err);
    return res.status(200).send("error in getting profile");
  }
};
