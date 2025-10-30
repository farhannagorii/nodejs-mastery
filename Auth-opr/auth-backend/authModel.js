import mongoose from "mongoose";

let authSchema = mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    }
},{timestemps:true})

let authModel = mongoose.model("auth",authSchema)

export default authModel