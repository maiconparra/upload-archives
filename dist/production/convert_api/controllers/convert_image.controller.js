"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const webp = __importStar(require("webp-converter"));
const path = __importStar(require("path"));
const image_model_1 = require("../../convert_business/models/mongodb/image.model");
class ConvertImageController {
    convertImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { urlOrigem, urlDestino, imageName } = req.body;
            let image = imageName.split('.');
            webp.cwebp(urlOrigem + imageName, urlDestino + image[0] + '.webp', '-q 85', '-v');
            return res.json({
                urlImageConver: urlDestino + image[0] + '.webp',
                imageName: image[0] + '.webp'
            });
        });
    }
    uploadFile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filename: name, size, destination: key } = req.file;
            const image = yield image_model_1.ImageModel.create({
                name,
                size,
                key,
                url: ' '
            });
            return res.json(image);
        });
    }
    teste(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const image = yield image_model_1.ImageModel.create({
                name: 'Teste',
                size: 22,
                key: 'testekey',
                url: 'testeurl'
            });
            return res.json(image);
        });
    }
    home(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.sendFile(path.join(__dirname, '../app.html'));
        });
    }
}
exports.default = ConvertImageController;
//# sourceMappingURL=convert_image.controller.js.map