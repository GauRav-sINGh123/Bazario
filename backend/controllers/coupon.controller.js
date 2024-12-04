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