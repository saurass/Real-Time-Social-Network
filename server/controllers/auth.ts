import * as passport from 'passport';
import * as mongoose from 'mongoose';
import {userSchema as User} from '../app/models/User';

export default class AuthCtrl {

  registerUser = (req, res) => {
    passport.authenticate('local-signup', (err, user) => {
        if (err) {
          res.status(200).json({'status': 'N', 'message': 'Something Went Wrong !!!'});
        }
        if (user) {
          res.status(200).json({'status': 'N', 'message': 'old email'});
        } else {
          const newUser = new User();
          newUser.local.email = req.body.email;
          newUser.local.username = req.body.username;
          newUser.local.password = newUser.generateHash(req.body.password);
          console.log(newUser);
          newUser.save(function (err) {
            if (err) {
              res.status(200).json({'status': 'N', 'message': err});
            } else {
              const token = newUser.generateJwt();
              res.status(200).json({'status': 'Y', 'message': 'email registered successfully !!!', 'token': token});
            }
          });
        }
      }
    )(req, res);
  }

  loginUser = (req, res) => {
    passport.authenticate('local-sign-in', (err, user, info) => {

      if (err) {
        res.status(404).json(err);
        return;
      }

      if (user) {
        const token = user.generateJwt();
        res.status(200);
        res.json({
          'token': token
        });
      } else {
        console.log(err);
        res.status(401).send(info);
      }

    })(req, res);
  }

}
