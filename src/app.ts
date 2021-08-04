import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import { Index } from '../src/routes/index';

require('dotenv').config();

class App {
  public app: express.Application;
  public indexRoutes: Index = new Index();

  constructor() {
    this.app = express();

    this.app.use(cookieParser());
    this.app.use(bodyParser.json({ limit: '100mb' }));
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.indexRoutes.routes(this.app);
  }
}

export default new App().app;
