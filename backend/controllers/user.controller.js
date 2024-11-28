import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import { redis } from "../db/redis.js";

// Generating Access Token and Refresh Token
const generateAccessAndRefereshTokens = async (userId) => {
  const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "40m",
  });
  const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "6d",
  });
  return { accessToken, refreshToken };
};

// Storing Refresh Token through`Redis
const storedRefreshToken = async (userId, refreshToken) => {
  await redis.set(
    `refreshToken:${userId}`,
    refreshToken,
    "EX",
    7 * 24 * 60 * 60
  );
};

//Setting Up Cookies
const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true, //prevent XSS attacks, cross-site scripting attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // prevents cross-site request forgery attacks CSRF
    maxAge: 40 * 60 * 1000,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true, //prevent XSS attacks, cross-site scripting attacks
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict", // prevents cross-site request forgery attacks CSRF
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};

export const signup = asyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  if ([email, name, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }

  if (!email || email.includes("@") === false) {
    throw new ApiError(400, "Invalid email");
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const user = await User.create({
    email,
    name,
    password,
  });

  const { accessToken, refreshToken } = await generateAccessAndRefereshTokens(
    user._id
  );
  await storedRefreshToken(user._id, refreshToken);

  setCookies(res, accessToken, refreshToken);

  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User created successfully"));
});

export const logout = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (refreshToken) {
    const decodedToken = jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    const userId = decodedToken.userId;
    await redis.del(`refreshToken:${userId}`);
  }else {
    throw new ApiError(400, "Refresh token not found");
  }
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, "User logged out successfully"));
});

export const login=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;

    if([email,password].some((field)=>field?.trim()==="")){
        throw new ApiError(400,"All fields are required");
    }
    const user=await User.findOne({email});
    if(!user){
      throw new ApiError(404,"User not found");
    }
    const isPasswordCorrect=await user.isPasswordCorrect(password);
    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid credentials");
    }
    const {accessToken,refreshToken}=await generateAccessAndRefereshTokens(user._id);
    await storedRefreshToken(user._id,refreshToken);
    setCookies(res,accessToken,refreshToken);

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken -cartItems"
    );

     return res.status(200).json(new ApiResponse(200,loggedInUser,"User Logged In Successfully"))
})