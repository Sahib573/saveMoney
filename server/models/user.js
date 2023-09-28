const mongoose = require("mongoose");
// const { buffer } = require('stream/consumers');

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactNo: {
      type: Number,
    },
    category: {
      type: Boolean, //pro or not
      required: true,
    },
    zone: {
      type: String,
    },
    address: {
      type: String,
    },
    avatar: {
      type: Buffer,
    },
    dob: {
      type: Date,
    },
    income: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
