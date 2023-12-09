const express = require("express");
const config = require("dotenv").config;
const passport = require("passport");
const connectDb = require("../backend/config/mongoose");
const multer = require("multer");
const cors = require('cors');
var corsOptions = {
  origin: ['http://localhost:5173'],
  methods : ['GET','POST','PUT,','DELETE'],
  credentials : true
}

config({
  path: "./config/config.env",
});
connectDb();

const app = express();

// *************middlewares*************
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// require("../backend/config/passport-jwt")(passport);
// app.use(passport.initialize());

// *************routes*************
// app.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
//   res.send("hi");
// });
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
res.send("hi");
})
app.use("/", require("./routes"));

app.listen(process.env.PORT, (err) => {
  if(err) console.log("Err while starting server")
  console.log("server started " + process.env.PORT);
});
module.exports = app;
// export  default app;