import express from "express"
import Dbconnect from "./databse.js"
import dotenv from "dotenv";
import authRoutes from "./authRoutes.js";
let app = express()
dotenv.config();
let port = process.env.PORT
app.use(express.json())
app.use(express.urlencoded())
import cookieParser from "cookie-parser";
app.use(cookieParser());

app.use("/auth",authRoutes)

app.listen(port,()=>{
    Dbconnect()
    console.log("server is running")
})