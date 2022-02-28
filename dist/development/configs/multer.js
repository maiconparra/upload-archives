"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto); 
var _multers3 = require('multer-s3'); var _multers32 = _interopRequireDefault(_multers3);
var _awssdk = require('aws-sdk'); var _awssdk2 = _interopRequireDefault(_awssdk);
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

const storageTypes = {
    local: _multer2.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, _path2.default.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            _crypto2.default.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                const key = fileName.split('-');

                file.key = key[0];

                cb(null, file.key);
            })
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
        } else {
            cb(new Error('Invalid file mime type.'));
        }
    },
    s3: _multers32.default.call(void 0, {
        s3: new _awssdk2.default.S3(),
        bucket: 'apitesteupload',
        contentType: _multers32.default.AUTO_CONTENT_TYPE,
        acl: 'public-read',
        key: (req, file, cb) => {
            _crypto2.default.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            })
        }
    })
};

 const multerConfig  = {
    dest: _path2.default.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: _multer2.default.diskStorage({
        destination: (req, file, cb) => {
            cb(null, _path2.default.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, cb) => {
            _crypto2.default.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, fileName);
            })
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
        } else {
            cb(new Error('Invalid file mime type.'));
        }
    }
}; exports.multerConfig = multerConfig;
