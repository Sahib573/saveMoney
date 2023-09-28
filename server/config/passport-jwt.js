const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = function (passport) {
  let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_KEY, //acts as a encryption key
  };
  try {
    passport.use(
      new JWTStrategy(opts, async function (jwt_payload, next) {
        try {
          let user = await User.findOne({ _id: jwt_payload._id });
          if (user) {
            return next(null, user);
          } else {
            return next(null, false);
          }
        } catch (err) {
          console.log(err);
          return next(err, false);
        }
      })
    );
    console.log("sahib");
  } catch (err) {
    console.log("singh");
    console.log(err);
  }
};
