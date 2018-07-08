import * as localStrategy from 'passport-local';
import {userSchema} from '../app/models/User';

export function passportLocal(passport) {
  // function to set session
  passport.serializeUser(function (user, done) {
    done(null, user._id);
  });

  // function to retrive the session
  passport.deserializeUser(function (id, done) {
    userSchema.findById(id, (err, user) => {
      done(err, user);
    });
  });

  // setting up strategy for local-signup
  passport.use('local-signup', new localStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, email, password, done) => {
    userSchema.findOne({'email': email}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, req.flash('error', 'User with email already exists !!!'));
      } else {
        const newUser = new userSchema(req.body);
        newUser.password = newUser.generateHash(password);

        newUser.save(function (err) {
          if (err) {
            throw err;
          }
          return done(null, newUser);
        });
      }
    });
  }));
}
