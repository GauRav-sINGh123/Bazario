import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { redis } from "../db/redis.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    throw new ApiError(404, "Products not found");
  }
  return res.status(200).json(new ApiResponse(200, products));
});

export const featuredProducts = asyncHandler(async (req, res) => {
  let featuredProducts = await redis.get("featured_products");
  if (featuredProducts) {
    return res.status(200).json(JSON.parse(featuredProducts));
  }
  featuredProducts = await Product.find({ isFeatured: true }).lean();

  if (!featuredProducts) {
    return res
      .status(404)
      .json(new ApiResponse(404, "Featured products not found"));
  }
  await redis.set("featured_products", JSON.stringify(featuredProducts));

  return res.status(200).json(new ApiResponse(200, featuredProducts));
});

 