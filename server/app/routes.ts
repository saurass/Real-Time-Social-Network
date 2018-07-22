import * as express from 'express';

import AuthCtrl from '../controllers/auth';

export function setRouters(app, passport, jwt) {

  const authCtrl = new AuthCtrl();

  const router = express.Router();

  const auth = jwt({
    secret: process.env.SECRET_TOKEN,
    userProperty: 'payload'
  });

  router.route('/signup').post(authCtrl.registerUser);
  router.route('/login').post(authCtrl.loginUser);
  router.post('/profile', auth, (req, res) => {
    res.send('Your Profile is here !!!');
  });

  // Prefix all the routes here with '/api'
  app.use('/api', router);
}
