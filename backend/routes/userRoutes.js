import express from "express"
import { signup,logout,login} from "../controllers/user.controller.js";
const router=express.Router();



router.route("/signup").post(signup);

router.route("/logout").post(logout);

router.route("/login").post(login);

export default router