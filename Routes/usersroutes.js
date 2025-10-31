import express, { Router } from "express"

let userroutes = express(Router)

userroutes.get("/insert",usercreated)
userroutes.post("/user-get",usergets)
userroutes.delete("/user-delete/:id",userdelete)

export default userroutes