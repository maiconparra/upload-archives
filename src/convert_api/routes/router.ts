import { Router } from 'express';
import multer from 'multer';

//Configs
import { multerConfig } from '../../configs/multer';

//Controllers
import ConvertImageController from '../controllers/convert_image.controller';

const Routes = Router();

const imageConvert = new ConvertImageController;

Routes.get('/', imageConvert.home);

Routes.post('/convert',  imageConvert.convertImage);
Routes.post('/uploadImages',  multer(multerConfig).single('file'), imageConvert.uploadFile);
Routes.post('/teste', imageConvert.teste);

export default Routes;