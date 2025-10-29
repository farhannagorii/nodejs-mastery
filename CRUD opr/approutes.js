import express from "express";
import userrouter from "./Userroutes.js";

let appRoutes = express.Router()

appRoutes.use("/user",userrouter)

export default appRoutes