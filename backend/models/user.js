const mongoose = require("mongoose");
const path = require("path");

require("mongoose-double")(mongoose);

var SchemaTypes = mongoose.Schema.Types;

const userSchema = mongoose.Schema(
  {
    // user_id:{
    //     type:String,
    //     required:true,
    //     unique:true
    // },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      default: "free",
    },

    address: {
      type: String,
    },

    contactNo: {
      type: Number,
    },
    friends: [
      {
        frind_id: mongoose.Schema.Types.ObjectId,
        name: String,
        email: String,
        contactNo: Number,
        address: String,
        amt_take: { type: SchemaTypes.Double, default: 0 },
        amt_give: { type: SchemaTypes.Double, default: 0 },
      },
    ],
    groups: [{id : mongoose.Schema.Types.ObjectId }],
    owe: { type: SchemaTypes.Double, default: 0 }, //lene hain jo
    owed: { type: SchemaTypes.Double, default: 0 }, // dene hain jo
    avatar: {
      type: Buffer,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
