import express from "express"
import { signup,logout } from "../controllers/user.controller.js";
const router=express.Router();



router.route("/signup").post(signup);

router.route("/logout").post(logout);

export default router