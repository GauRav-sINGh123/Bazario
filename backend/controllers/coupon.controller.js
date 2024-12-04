import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";
import Coupon from "../models/coupon.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getCoupon = asyncHandler(async (req, res) =>{
    const coupon = await Coupon.findOne({userId:req.user._id,isActive:true});
    if(!coupon){
        throw new ApiError(404,"Coupons not found")
    }
    return res.status(200).json(new ApiResponse(200,coupon))
})

export const validateCoupon=asyncHandler(async(req,res)=>{
    const {code}=req.body;
    const coupon=await Coupon.findOne({code:code,userId:req.user._id,isActive:true});
    if(!coupon){
        throw new ApiError(404,"Coupon not found")
    }
    if(coupon.expiryDate<new Date()){
        coupon.isActive=false;
        await coupon.save();
        return res.status(200).json(new ApiResponse(200,"Coupon Expired"))
         
    }
    return res.status(200).json({
        message:"Coupon Valid",
        code:coupon.code,
        discountPercentage:coupon.discountPercentage
    })
})