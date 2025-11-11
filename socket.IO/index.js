// const express = require("express")
// let http = require("http")
// let app = express()
// let path = require("path")
// app.use(express.static(path.resolve("./public")))
// const { Server } = require("socket.io"); 

// let server = http.createServer(app)
// const io = new Server(server);


// app.get("/",(req,res ,next)=>{
//     res.sendFile("index.html")
// })

// io.on('connection', (socket) => {
//   socket.on("massage",(msg)=>{
//     console.log(msg,socket.id)
//     io.emit("msgfrombackend",msg)
//   })

  
// });



// server.listen(8000,()=>{
//     console.log("hello 8000")
// })