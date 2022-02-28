"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _mongoose = require('mongoose');

//interface


const Image = new _mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    cratedAt: {
        type: Date,
        default: Date.now
    }
});

 const ImageModel = _mongoose.model('Image', Image); exports.ImageModel = ImageModel;