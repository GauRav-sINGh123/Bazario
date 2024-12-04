import { Schema,model } from "mongoose";

const couponSchema = new Schema({
    code:{
        type:String,
        required:true,
        trim:true,
        unique:true

    },
    discountPercentage:{
        type:Number,
        min:0,
        max:100,
        required:true
    },
    expiryDate:{
        type:Date,
        required:true
    },
    isActive:{
        type:Boolean,
        default:false
    },
    userId:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    }
},{timestamps:true})

const Coupon = model("Coupon",couponSchema);

export default Coupon