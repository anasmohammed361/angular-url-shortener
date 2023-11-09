import {Schema,model} from "mongoose";

const urlSchema = new Schema({
    baseUrl:{
        type:String,
        required:true
    },
    shortenedUrl:{
        type:String,
        required:true,
        unique:true
    }
})

export const urlModel = model('url',urlSchema)