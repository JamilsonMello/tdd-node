import 'reflect-metadata';
import express, { Express } from 'express';

import routes from './routes';

class App {
  public readonly express: Express;
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
