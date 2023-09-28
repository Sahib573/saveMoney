const express = require("express");
const config = require("dotenv").config;
const passport = require("passport");
const connectDb = require("./config/mongoose");
const cors = require("cors");

config({
  path: "./config/config.env",
});
connectDb();

const app = express();

// *************middlewares*************
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
require("./config/passport-jwt")(passport);
app.use(passport.initialize());

// *************routes*************
app.use("/", require("./routes"));

app.listen(5172, (err) => {
  if (err) console.log(err);
  else console.log("server started");
});
module.exports = app;
