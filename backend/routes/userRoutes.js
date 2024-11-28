import express from "express"
import { signup,logout,refreshToken,login} from "../controllers/user.controller.js";
const router=express.Router();



router.route("/signup").post(signup);

router.route("/logout").post(logout);

router.route("/login").post(login);

router.route("/refresh-token").post(refreshToken);

export default router