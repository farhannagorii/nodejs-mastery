import express from "express"
import { logout, signin, signup } from "./authController.js"
import { verifyToken } from "./tokensign.js"


let authRoutes = express.Router()

authRoutes.post("/signup",signup)
authRoutes.post("/signin",signin)
authRoutes.post("/logout",verifyToken,logout)

export default authRoutes