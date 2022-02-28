"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
//Configs
const multer_2 = require("../../configs/multer");
//Controllers
const convert_image_controller_1 = __importDefault(require("../controllers/convert_image.controller"));
const Routes = express_1.Router();
const imageConvert = new convert_image_controller_1.default;
Routes.get('/', imageConvert.home);
Routes.post('/convert', imageConvert.convertImage);
Routes.post('/uploadImages', multer_1.default(multer_2.multerConfig).single('file'), imageConvert.uploadFile);
Routes.post('/teste', imageConvert.teste);
exports.default = Routes;
//# sourceMappingURL=router.js.map