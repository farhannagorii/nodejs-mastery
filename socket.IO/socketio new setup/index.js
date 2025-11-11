const express = require("express")
const { app, server } = require("./socket.io")


app.cors({
    origin:"http://localhost:5173",
    Credential:true

})


server.listen(8000,()=>{
    console.log("my setup is running on 8000")
})