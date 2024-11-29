import express from "express";
const router = express.Router();
import { isAdmin, isProtected } from "../middlewares/auth.middleware.js";
import { getAllProducts } from "../controllers/product.controller.js";

router.route("/").get(isProtected,isAdmin,getAllProducts);

export default router