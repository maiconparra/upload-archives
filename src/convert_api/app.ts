import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

//import connection from '../cars_database/database';
import { connect } from '../convert_database/database/mongodb';

import Routes from './routes/router';


class App {
    public express: express.Application

    public constructor (
    ) {
      this.express = express();
      //this.connect();
      this.mongoConnect();
      this.middleware();
      this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: true }));
        this.express.use(morgan('dev'));
        this.express.use(cors());
    }

    /*private connect(): void {
        connection
    }*/

    private mongoConnect(): void {
      connect.environment;
    }

    private routes(): void {
      this.express.use(Routes);
    }
}

export default new App().express;
