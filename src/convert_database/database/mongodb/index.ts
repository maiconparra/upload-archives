import mongoose from 'mongoose';

require('dotenv/config');

const environment = process.argv.slice(process.argv.length - 1);

var connectionMongoose: String;

if (environment[0] == 'development') {
    connectionMongoose = process.env.DEVELOPMENT_MONGODB_DATABASE;
}else if (environment[0] == 'approval') {
    connectionMongoose = process.env.APPROVAL_MONGODB_DATABASE;
}else if (environment[0] == 'production') {
    connectionMongoose = process.env.PRODUCTION_MONGODB_DATABASE;
}

console.log(environment);

export const connect = mongoose.connect(connectionMongoose.toString(), {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});