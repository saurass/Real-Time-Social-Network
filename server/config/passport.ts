import {userSchema  as User} from '../app/models/User';
import {Strategy} from 'passport-local';

export function passportLocal(passport) {
  // // function to set session
  // passport.serializeUser(function (user, done) {
  //   done(null, user._id);
  // });
  //
  // // function to retrive the session
  // passport.deserializeUser(function (id, done) {
  //   User.findById(id, (err, user) => {
  //     done(err, user);
  //   });
  // });

  // setting up strategy for local-signup
  passport.use('local-signup', new Strategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
  }, (req, username, email, password, done) => {
    User.findOne({'email': email}, function (err, user) {
      if (err) {
        return done(err);
      }
      if (user) {
        return done(null, false, {'message': 'Email already registered!!'});
      }
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      if (!user.checkPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      return done(null, user);
    });
  }));
}
