import {asyncHandler} from '../utils/asyncHandler.js';
import Product from '../models/product.model.js';
import {ApiError} from '../utils/ApiError.js';
import {ApiResponse} from '../utils/ApiResponse.js';
 


export const getAllProducts=asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    if(!products){
        throw new ApiError(404,"Products not found");
    }
    return res.status(200).json(new ApiResponse(200,products));
})