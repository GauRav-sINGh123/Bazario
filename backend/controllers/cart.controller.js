import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
 




export const addToCart=asyncHandler(async(req,res)=>{
    const {productId}=req.body;
    const user=req.user;
    const existingItem=user.cartItems.find(item=>item.id===productId);
    if(existingItem){
       existingItem.quantity+=1;
    }else{
        user.cartItems.push(productId);  
    }
   
    await user.save();

    return res.status(200).json(new ApiResponse(200,user.cartItems))
})