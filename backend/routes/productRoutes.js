import express from "express";
const router = express.Router();
import { isAdmin, isProtected } from "../middlewares/auth.middleware.js";
import { getAllProducts,featuredProducts,createProduct,deleteProduct } from "../controllers/product.controller.js";

router.route("/").get(isProtected,isAdmin,getAllProducts);

router.route("/featured-products").post(featuredProducts);

router.route("/create-product").post(isProtected,isAdmin,createProduct);

router.route('/:id').delete(isProtected,isAdmin,deleteProduct);

export default router