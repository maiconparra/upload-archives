"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const environment = process.argv.slice(2);

console.log(process.argv.slice(2));

const database = {
    user: '',
    password: '',
    database: ''
}

if (environment[0] != 'approval') {
    database.user = 'maiconparra';
    database.password = 'teste';
    database.database = 'uploadImages';
}

 const connect = _mongoose2.default.connect('mongodb+srv://'+database.user+':'+database.password+'@cluster0.4avqv.mongodb.net/'+database.database+'?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
}); exports.connect = connect;