import mongoose from 'mongoose';

export const connect = mongoose.connect('mongodb+srv://maiconparra:<password>@cluster0.4avqv.mongodb.net/testeuploadimage?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});