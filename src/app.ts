import express, { Express } from 'express';

import routes from './routes';

class App {
  public readonly express: Express;
  constructor() {
    this.express = express();

    this.middlewared();
    this.routes();
  }

  private middlewared(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
