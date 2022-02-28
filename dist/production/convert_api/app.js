"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//import connection from '../cars_database/database';
const mongodb_1 = require("../convert_database/database/mongodb");
const router_1 = __importDefault(require("./routes/router"));
class App {
    constructor() {
        this.express = express_1.default();
        //this.connect();
        this.mongoConnect();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.express.use(express_1.default.json());
        this.express.use(express_1.default.urlencoded({ extended: true }));
        this.express.use(morgan_1.default('dev'));
        this.express.use(cors_1.default());
    }
    /*private connect(): void {
        connection
    }*/
    mongoConnect() {
        mongodb_1.connect.environment;
    }
    routes() {
        this.express.use(router_1.default);
    }
}
exports.default = new App().express;
//# sourceMappingURL=app.js.map