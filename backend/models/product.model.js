import { Schema,model } from "mongoose";

const productSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    image:{
        type:String,
        required:[true,"Image is required"],
    },
    category:{
        type:String,
        required:true
    },
    isFeatured:{
        type:Boolean,
        default:false
    },
    stock:{
        type:Number,
        default:0
    }
},{timestamps:true});

const Product=model('Product',productSchema);

export default Product