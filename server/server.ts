import * as express from 'express';
import * as http from 'http';
import {container} from './container';

container.resolve(function () {

  const app = express();
  const port = process.env.PORT || 3000;

  const server = http.createServer(app);

  server.listen(port, () => {
    console.log('Server started on port ' + port);
  });

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

});
