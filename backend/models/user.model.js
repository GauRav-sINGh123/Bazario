import { Schema, model } from "mongoose";
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
     avatar:{
        type:String
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
},{timestamps:true})

userSchema.pre("save",async function(next){
   if(!this.isModified("password")) return next();
   
   this.password=await bycrpt.hash(this.password,10);
   next();
})

userSchema.methods.isPasswordCorrect = async function(password){
   return await bycrpt.compare(password, this.password)
}


const User=model('user',userSchema);

export default User