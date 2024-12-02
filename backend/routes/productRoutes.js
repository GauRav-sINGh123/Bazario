import express from "express";
const router = express.Router();
import { isAdmin, isProtected } from "../middlewares/auth.middleware.js";
import { getAllProducts,featuredProducts,createProduct,deleteProduct,getReccomendedProducts,getProudctsByCategory} from "../controllers/product.controller.js";

router.route("/").get(isProtected,isAdmin,getAllProducts);

router.route("/featured-products").get(featuredProducts);

router.route("/category/:category").get(isProtected,getProudctsByCategory);

router.route("/create-product").post(isProtected,isAdmin,createProduct);

router.route('/:id').delete(isProtected,isAdmin,deleteProduct);

router.route('/reccomendations').get(isProtected,getReccomendedProducts);

export default router