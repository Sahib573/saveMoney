const express = require("express");
const config = require("dotenv").config;
const passport = require("passport");
const connectDb = require("./config/mongoose");

config({
  path: "./config/config.env",
});
connectDb();

const app = express();

// *************middlewares*************
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
require("./config/passport-jwt")(passport);
app.use(passport.initialize());

// *************routes*************
app.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.send("hi");
});

app.listen(5172, () => {
  console.log("server started");
});
module.exports = app;
