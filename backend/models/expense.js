const mongoose = require("mongoose");
const path = require("path");

const expenseSchema = mongoose.Schema(
  {
    cost: Number,
    description: String,
    category: String,
    currency_code: { type: String, default: "INR" },
    user_id: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
    email_reminder: Boolean,
    payment: {type : Boolean, default : false},
    transaction_confirmed: { type: Boolean, default: false },
    repayments: [
      {
        from: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
        to:{type:mongoose.Schema.Types.ObjectId, ref: "User",},
        amount: Number,
      },
    ],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    updated_by: {
      id: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
      name: String,
      email: String,
    },
    deleted_at: Date,
    deleted_by: {
      id:{type:mongoose.Schema.Types.ObjectId, ref: "User",},
      name: String,
      email: String,
    },
    users: [
      {
        id: {type:mongoose.Schema.Types.ObjectId, ref: "User",},
        name: String,
        email: String,
        paid_share: Number,
        owed_share: Number,
        net_balance: Number,
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

const Expense = mongoose.model("Expense", expenseSchema);
module.exports = Expense;
