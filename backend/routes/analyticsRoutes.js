import express from "express"
const router=express.Router();
import { isProtected, isAdmin } from "../middlewares/auth.middleware.js";
import { getAnalytics } from "../controllers/analytics.controller.js";

router.route("/").get(isProtected,isAdmin ,getAnalytics);

export default router