import { asyncHandler } from "../utils/asyncHandler.js";
import Product from "../models/product.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import  cloudinary from "../utils/cloudinary.js";
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

 export const createProduct = asyncHandler(async (req, res) => {
    const { name, description, price, image, category,stock } = req.body;

    if (
      [name, description, price, image, category,stock].some((field) => field?.trim() === "")
    ) {
      throw new ApiError(400, "All fields are required");
    }
    
    if (isNaN(price) || price <= 0) {
        throw new ApiError(400, "Price must be a valid positive number");
    }

    let cloudinaryResponse=null;

    if (image) {
        try {
          cloudinaryResponse = await cloudinary.uploader.upload(image, { folder: "products" });
        } catch (err) {
          throw new ApiError(500, "Failed to upload image to Cloudinary");
        }
      }
    const product =await Product.create({
        name,
        description,
        price,
        image:cloudinaryResponse?.secure_url ? cloudinaryResponse?.secure_url:"",
        category,
        stock
    })
      return res.status(201).json(new ApiResponse(201, product));
 })