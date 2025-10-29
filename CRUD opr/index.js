

import express from "express"
const app=express();
import dotenv from "dotenv"
import Dbconnect from "./config.js";
import appRoutes from "./approutes.js";
dotenv.config()
const PORT =process.env.PORT || 5000;
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));


app.use("/",appRoutes)


app.listen(PORT,()=>{
   Dbconnect()
    console.log(`server is running on ${PORT}`)
})