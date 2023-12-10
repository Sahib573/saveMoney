const mongoose = require("mongoose");
const path = require("path");
require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const groupSchema = mongoose.Schema(
  {
    //   "id": 321,
    name: String,
    group_type: String,
    description: String,
    created_by: mongoose.Schema.Types.ObjectId,
    creater_mail: String,
    total: { type: SchemaTypes.Double, default: 0 },
    currency_code: { type: String, default: "INR" },

    members: [
      {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        name: String,
        email: String,
        registration_status: String,
        //   "custom_picture": false,
        total: { type: SchemaTypes.Double, default: 0 },
        balance: [{ type: SchemaTypes.Double, default: 0 }],
      },
    ],
    original_debts: [
      {
        from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        amount: Number,
        currency_code: String,
      },
    ],
    simplified_debts: [
      {
        from: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        to: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
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
