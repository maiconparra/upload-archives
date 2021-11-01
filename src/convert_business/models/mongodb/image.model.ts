import { Schema, model } from "mongoose";

//interface
import { ImageInterface } from "../../interfaces/mongodb/image.interface";

const Image = new Schema<ImageInterface>({
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

export const ImageModel = model<ImageInterface>('Image', Image);