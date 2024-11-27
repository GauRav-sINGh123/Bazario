import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";

export const signup = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if ([email, name, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  if (!email || email.includes("@") === false) {
    throw new ApiError(400, "Invalid email");
  }
  
  const existingUser=await User.findOne({email})

  if(existingUser){
    throw new ApiError(409,"User already exists")
  }
   
  const user= await User.create({
    email,
    name,
    password
  })

  const createdUser = await User.findById(user._id).select(
   "-password "
 );
 if (!createdUser) {
   throw new ApiError(500, "Something went while registering user");
 }
 return res
   .status(201)
   .json(new ApiResponse(200, createdUser, "User created successfully"));
 
});
