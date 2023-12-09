const mongoose = require("mongoose");
const path = require("path");

const groupSchema = mongoose.Schema(
  {
    //   "id": 321,
    name: String,
    group_type: String,
    simplify_by_default: true,
    members: [
      {
        id:{type:mongoose.Schema.Types.ObjectId, ref: "User"},
        name: String,
        email: String,
        registration_status: String,
        //   "custom_picture": false,
        balance: [
          {
            currency_code: String,
            amount: Number,
          },
        ],
      },
    ],
    original_debts: [
      {
        from: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
        to: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
        amount: Number,
        currency_code: String,
      },
    ],
    simplified_debts: [
      {
        from: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
        to: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
        amount: Number,
        currency_code: String,
      },
    ],
    avatar: {
      type: Buffer,
    },
    invite_link: String,
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
  