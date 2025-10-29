import express from "express"
import { deleteuser, updateuser, usercreate, viewuser } from "./Usercontroller.js";

const userrouter = express.Router();

userrouter.post("/insert",usercreate)
userrouter.get("/view",viewuser)
userrouter.delete("/delete/:id",deleteuser)
userrouter.put("/update/:uid",updateuser)

export default userrouter;