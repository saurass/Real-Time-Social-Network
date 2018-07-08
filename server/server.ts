import * as express from 'express';
import * as http from 'http';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as session from 'express-session';

import {container} from './container';
import {urlDB} from './config/database';
import {setRouters} from './app/routes';
import {passportLocal} from './config/passport';

container.resolve(function () {

  // Initializing express Here
  const app = express();
  const port = process.env.PORT || 3000;
  const server = http.createServer(app);

  // Starting the server on the port
  server.listen(port, () => {
    console.log('Server started on port ' + port);
  });

  configureExpress(app);
});

function configureExpress(app) {

  // Seting path for static files
  app.use(express.static('public'));

  // Parse all JSON here
  app.use(express.json());

  // Parse all form data
  app.use(express.urlencoded({extended: true}));

  // Setup the view engine
  app.set('view engine', 'ejs');

  // Connection to MongoDB
  mongoose.Promise = global.Promise;
  mongoose.connect(urlDB, {useNewUrlParser: true}).then(
    db => {
      console.log('Connected to database !!');
    });

  // Using the node session which is required by passport
  app.use(session({
    secret: 'secret key'
  }));

  // Initialize the passport
  app.use(passport.initialize());
  app.use(passport.session());
  // app.use(passport.flash());

  // Configure the passport object
  passportLocal(passport);

  // Start Morgan for console log activities
  app.use(morgan('dev'));

  // Set Up the routes
  setRouters(app);
}
