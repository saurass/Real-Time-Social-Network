import * as express from 'express';

import AuthCtrl from '../controllers/auth';

export function setRouters(app, passport) {

  const authCtrl = new AuthCtrl();

  const router = express.Router();

  router.route('/signup').post(authCtrl.registerUser);
  router.route('/login').post(authCtrl.loginUser);

  // Prefix all the routes here with '/api'
  app.use('/api', router);
}
