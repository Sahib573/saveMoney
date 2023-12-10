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
    return res.status(200).send("error in getting transactions");
  }
};

module.exports.byDate = async (req, res) => {
  try {
    let expenses = await Expense.find({
      user_id: req.body._id,
      created_at: {
        $gte: new Date(req.body.date),
        $lt: new Date(req.body.lessthandate),
      },
    });
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
    return res.status(200).send("error in getting transactions");
  }
};

module.exports.getAnalytics = async (req, res) => {
  try {
   
    const raw = await Expense.find({
      user_id: req.body._id,
      created_at: {
        $gte: new Date(req.body.lastweekstart),
        $lt: new Date(req.body.curweekstart),
      },
    }).sort({ created_at: 1 });
    const raw2 = await Expense.find({
      user_id: req.body._id,
      created_at: {
        $gte: new Date(req.body.curweekstart),
        $lt: new Date(req.body.curweekend),
      },
    }).sort({ created_at: 1 });
    let lastArr = [],
      curArr = [],
      lastCat = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
      curCat = lastCat,
      map = [
        "Food",
        "Clothes",
        "Fun",
        "Personal Development",
        "Travel",
        "Groceries",
        "Hair",
      ];
    for (let i = 0; i < raw.length; i++) {
      lastArr.push(raw[i].cost);
      let ind = map.indexOf(raw[i].category);
      lastCat[ind] += raw[i].cost;
    }
    for (let i = 0; i < raw2.length; i++) {
      curArr.push(raw2[i].cost);
      let ind = map.indexOf(raw2[i].category);
      curCat[ind] += raw2[i].cost;
    }
    console.log(lastArr + curArr)
    return res.status(200).json({
      success: true,
      lastweek: raw,
      curweek: raw2,
      lastArr,
      curArr,lastCat,curCat
    });
  } catch (err) {
    console.log(err);
    return res.status(200).send("error in getting Analytics");
  }
};
