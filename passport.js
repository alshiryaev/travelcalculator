const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const user = {
  username: process.env.ADMIN_LOGIN,
  password: process.env.ADMIN_PASSWORD
};

module.exports = function (app) {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(
    new LocalStrategy(function (username, password, done) {
      if (username === user.username && user.password === password) {
        return done(null, user.username);
      }
      return done(null, false, { message: "Incorrect password." });
    })
  );

}