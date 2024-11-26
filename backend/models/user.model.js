import { Schema, model } from "mongoose";
import jwt from 'jsonwebtoken'
import bycrpt from 'bcrypt'

const userSchema=new Schema({
     email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
     },
     name:{
        type:String,
        required:true,
        trim:true,
        index:true
     },
     password:{
        type:String,
        required:[true,"Password is required"],
     },
     cartItems:[
        {
            quantity:{
                type:Number,
                default:1
            },
            product:{
                type:Schema.Types.ObjectId,
                ref:"Product"
            }
        }
     ],
     role:{
        type:String,
        enum:["customer","admin"],
        default:"customer"
     }
})

const User=mongoose.model('user',userSchema);

export default User