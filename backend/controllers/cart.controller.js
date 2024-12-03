import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
 

// Adds the product into the cart
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

//Delete functionallity for removing the products from the cart 

export const deleteAllProductsFromCart=asyncHandler(async(req,res)=>{
    const {productId}=req.body;
    const user=req.user;
    if(!productId){
       user.cartItems=[];
    }else{
        user.cartItems=user.cartItems.filter((item)=>item.id!==productId)
    }
    await user.save();
    return res.status(200).json(new ApiResponse(200,user.cartItems))
})

// Update Method for updating the quantity of the products

export const updateProductQuantity=asyncHandler(async(req,res)=>{
    const {id:productId}=req.params;
    const {quantity}=req.body;
    const user=req.user;
    const existingItem=user.cartItems.find((item)=>item.id===productId)
    if(existingItem){
        if(quantity===0){
            user.cartItems=user.cartItems.filter((item)=>item.id!==productId)
            await user.save()
            return res.status(200).json(user.cartItems);
        }
        existingItem.quantity=quantity;
        await user.save();
        res.status(200).json(new ApiResponse(200,"Product Quantity Updated"))
        
    }else{
        throw new ApiError(400,"Product Not Found")
    }
})