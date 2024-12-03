import express from "express";
const router=express.Router();
import { isProtected } from "../middlewares/auth.middleware";
import {addToCart,deleteAllProductsFromCart,updateProductQuantity} from "../controllers/cart.controller.js";


router.route("/").get(isProtected,getCartProducts);

router.route("/").post(isProtected,addToCart);

router.route("/").delete(isProtected,deleteAllProductsFromCart);

router.route("/:id").put(isProtected,updateProductQuantity);