"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

//Configs
var _multer3 = require('../../configs/multer');

//Controllers
var _convert_imagecontroller = require('../controllers/convert_image.controller'); var _convert_imagecontroller2 = _interopRequireDefault(_convert_imagecontroller);

const Routes = _express.Router.call(void 0, );

const imageConvert = new _convert_imagecontroller2.default;

Routes.get('/', imageConvert.home);

Routes.post('/convert',  imageConvert.convertImage);
Routes.post('/uploadImages',  _multer2.default.call(void 0, _multer3.multerConfig).single('file'), imageConvert.uploadFile);
Routes.post('/teste', imageConvert.teste);

exports. default = Routes;