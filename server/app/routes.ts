import * as express from 'express';

export function setRouters(app) {

  const router = express.Router();

  router.route('/').get((req, res) => {
    res.status(200).json({
      'text': 'Hey Saurass !!!',
    });
  });

  // Prefix all the routes here with '/api'
  app.use('/api', router);
}
