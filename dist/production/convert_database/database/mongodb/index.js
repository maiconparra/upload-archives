"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv/config');
const environment = process.argv.slice(process.argv.length - 1);
var connectionMongoose;
if (environment[0] == 'development') {
    connectionMongoose = process.env.DEVELOPMENT_MONGODB_DATABASE;
}
else if (environment[0] == 'approval') {
    connectionMongoose = process.env.APPROVAL_MONGODB_DATABASE;
}
else if (environment[0] == 'production') {
    connectionMongoose = process.env.PRODUCTION_MONGODB_DATABASE;
}
console.log(environment);
exports.connect = mongoose_1.default.connect(connectionMongoose.toString(), {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//# sourceMappingURL=index.js.map