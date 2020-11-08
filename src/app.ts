import 'reflect-metadata';
import './config/config-environment';
import connection from './database'

import express, { Express } from 'express';

import routes from './routes';

class App {
  public readonly express: Express;
  constructor() {
    this.connection()
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private async connection(): Promise<void> {
    connection.create()
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
