"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const storageTypes = {
    local: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path_1.default.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                const key = fileName.split('-');
                file.key = key[0];
                cb(null, file.key);
            });
        }
    }),
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjepg',
            'image/png',
            'image/svg+xml',
            'image/webp',
            'image/gif'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file mime type.'));
        }
    },
    s3: multer_s3_1.default({
        s3: new aws_sdk_1.default.S3(),
        bucket: 'apitesteupload',
        contentType: multer_s3_1.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            });
        }
    })
};
exports.multerConfig = {
    dest: path_1.default.resolve(__dirname, '..', 'tmp', 'uploads'),
    storage: multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path_1.default.resolve(__dirname, '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            crypto_1.default.randomBytes(16, (err, hash) => {
                if (err)
                    cb(err);
                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            });
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjepg',
            'image/png',
            'image/svg+xml',
            'image/webp',
            'image/gif'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error('Invalid file mime type.'));
        }
    }
};
//# sourceMappingURL=multer.js.map