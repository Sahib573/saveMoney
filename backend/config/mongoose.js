const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "saveMoney",
    })
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
};
module.exports = connectDb;
