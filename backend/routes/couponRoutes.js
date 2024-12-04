import express from "express";
const router=express.Router();
import {isProtected} from "../middlewares/auth.middleware.js";
import {getCoupon} from "../controllers/coupon.controller.js";

router.route("/").get(isProtected,getCoupon);

router.route("/validate").get(isProtected,validateCoupon);

export default router