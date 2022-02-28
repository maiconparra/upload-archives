import { Request, Response } from 'express';
import { request } from 'http';

import * as webp from 'webp-converter';
import * as path from 'path';

import { ImageModel } from '../../convert_business/models/mongodb/image.model';


export default class ConvertImageController {
    public async convertImage(req: Request, res: Response): Promise<Response> {

        const { urlOrigem, urlDestino, imageName } = req.body;

        let image = imageName.split('.');
        
        webp.cwebp(urlOrigem+imageName, urlDestino+image[0]+'.webp', '-q 85', '-v');

        return res.json({
            urlImageConver: urlDestino+image[0]+'.webp',
            imageName: image[0]+'.webp'
        });
    }

    public async uploadFile(req: Request, res: Response): Promise<Response> {

        const { filename: name, size, destination: key } = req.file; 

        const image = await ImageModel.create({
            name,
            size,
            key,
            url: ' '
        });

        return res.json(image);
    }

    public async teste(req: Request, res: Response): Promise<Response> {
        
        const image = await ImageModel.create({
            name: 'Teste',
            size: 22,
            key: 'testekey',
            url: 'testeurl'
        });

        return res.json(image);
    }

    public async home(req: Request, res: Response): Promise<any> {
        return res.sendFile(path.join(__dirname,'../app.html'));
    }
}
