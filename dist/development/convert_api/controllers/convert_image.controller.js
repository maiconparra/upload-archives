"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }


var _webpconverter = require('webp-converter'); var webp = _interopRequireWildcard(_webpconverter);
var _path = require('path'); var path = _interopRequireWildcard(_path);

var _imagemodel = require('../../convert_business/models/mongodb/image.model');


 class ConvertImageController {
     async convertImage(req, res) {

        const { urlOrigem, urlDestino, imageName } = req.body;

        let image = imageName.split('.');
        
        webp.cwebp(urlOrigem+imageName, urlDestino+image[0]+'.webp', '-q 85', '-v');

        return res.json({
            urlImageConver: urlDestino+image[0]+'.webp',
            imageName: image[0]+'.webp'
        });
    }

     async uploadFile(req, res) {

        const { filename: name, size, destination: key } = req.file; 

        const image = await _imagemodel.ImageModel.create({
            name,
            size,
            key,
            url: ' '
        });

        return res.json(image);
    }

     async teste(req, res) {
        
        const image = await _imagemodel.ImageModel.create({
            name: 'Teste',
            size: 22,
            key: 'testekey',
            url: 'testeurl'
        });

        return res.json(image);
    }

     async home(req, res) {
        return res.sendFile(path.join(__dirname,'../app.html'));
    }
} exports.default = ConvertImageController;
