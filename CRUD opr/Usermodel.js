
import mongoose from "mongoose";

let userschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    age:{
        type:Number,

    },      
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,

    }
},{timestamps:true})

const User = mongoose.model("User", userschema)

export default User