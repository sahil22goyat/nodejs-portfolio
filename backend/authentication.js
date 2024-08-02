const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const logger = require('./model/loggers');

passport.use(new LocalStrategy(
  { usernameField: 'email' }, 
  async (email, password, done) => {
    try {
      const user = await logger.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Incorrect password' });
      }
    } catch (err) {
      return done(err); 
    }
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await logger.findById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
