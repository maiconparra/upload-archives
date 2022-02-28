"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);

//import connection from '../cars_database/database';
var _mongodb = require('../convert_database/database/mongodb');

var _router = require('./routes/router'); var _router2 = _interopRequireDefault(_router);


class App {
    

     constructor (
    ) {
      this.express = _express2.default.call(void 0, );
      //this.connect();
      this.mongoConnect();
      this.middleware();
      this.routes();
    }

     middleware() {
        this.express.use(_express2.default.json());
        this.express.use(_express2.default.urlencoded({ extended: true }));
        this.express.use(_morgan2.default.call(void 0, 'dev'));
        this.express.use(_cors2.default.call(void 0, ));
    }

    /*private connect(): void {
        connection
    }*/

     mongoConnect() {
      _mongodb.connect.environment;
    }

     routes() {
      this.express.use(_router2.default);
    }
}

exports. default = new App().express;
