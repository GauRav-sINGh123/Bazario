import express from "express";
const router = express.Router();
import { isAdmin, isProtected } from "../middlewares/auth.middleware";
import { getAllProducts } from "../controllers/product.controller.js";

router.route("/").get(isAdmin,isProtected,getAllProducts);

export default router