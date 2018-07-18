import {userSchema  as User} from '../app/models/User';
import {Strategy} from 'passport-local';

export function passportLocal(passport) {

  passport.use('local-signup', new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  }, (username, password, done) => {
    process.nextTick(() => {
      User.findOne({'local.email': username}, function (err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }));

}
