const Expense = require("../models/expense");
const { connection } = require("mongoose");
module.exports.create = async (req, res) => {
  try {
    let newExpense = await Expense.create({
      cost: req.body.cost,
      description: req.body.description,
      category: req.body.category,
      user_id: req.body._id,
      email: req.body.email,
      // users : [{id:  req.body._id}]
    });
    await newExpense.save();
    return res.status(200).json({ message: "success", data: newExpense });
  } catch (err) {
    console.log(err);
    return res.status(200).send("error in creating transaction");
  }
};

module.exports.all = async (req, res) => {
  try {
    let expenses = await Expense.find({ user_id: req.body._id });
    if (!expenses) {
      return res.json.status(422).json({
        message: "No expense added yet.",
      });
    }
    return res.status(200).json({
      message: "success",
      data: expenses,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .send("error in getting transactions");
  }
};

module.exports.byDate = async (req, res) => {
    try {
      let expenses = await Expense.find({ user_id: req.body._id ,created_at : {$gte:new Date(req.body.date),$lt:new Date(req.body.lessthandate)}});
      if (!expenses) {
        return res.json.status(422).json({
          message: "No expense added yet.",
        });
      }
      return res.status(200).json({
        message: "success",
        data: expenses,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(200)
        .send("error in getting transactions");
    }
  };