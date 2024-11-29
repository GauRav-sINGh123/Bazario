import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const isProtected = asyncHandler(async (req, res, next) => {
  try {
    const accessToken = req.cookies.accessToken;
    if (!accessToken) {
      throw new ApiError(401, "Unauthorized - Access token not found");
    }
    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken.userId).select(
      "-password -cartItems"
    );
    if (!user) {
      throw new ApiError(401, "User not found");
    }
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(
      401,
      error?.message || "Unauthorized - Invalid Access token"
    );
  }
});

export const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    throw new ApiError(401, "Access denied - User is not an admin");
  }
});
