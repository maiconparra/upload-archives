"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageModel = void 0;
const mongoose_1 = require("mongoose");
const Image = new mongoose_1.Schema({
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
exports.ImageModel = mongoose_1.model('Image', Image);
//# sourceMappingURL=image.model.js.map