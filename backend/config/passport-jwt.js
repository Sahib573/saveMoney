const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const bcrypt = require("bcrypt");

module.exports = function (passport) {
  let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "13975sahib", //acts as a encryption key
  };
  try {
    passport.use(
      new JWTStrategy(opts, async function (jwt_payload, next) {
        try {
          //   console.log(jwt_payload);
          //   console.log(jwt_payload);
          //   let user = await User.findOne({ user_id: jwt_payload.user_id });
          let user;
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
    // console.log("sahib");
  } catch (err) {
    // console.log("singh");
    console.log(err);
  }
};
