
const express = require("express")
const http = require("http")
let app = express()
let Server = require("socket.io")



let server = http.createServer(app)

let io = new Server(server, {
    cors: {
        origin: "http://localhost:5173"
    },


})
export const usersocketMap = {}
const userSocketMap = {}
export const getReceiverSocketId = (receiver) => {
    return userSocketMap[receiver]
}
io.on("connection", (socket) => {
    console.log(socket)

    const userId = socket.handShake.query.userId;
    if (userId != undefined) {
        usersocketMap[userId] = socket.id
        // userId : socketid
        // userId : socketid
        // userId : socketid

        io.emit("getonlineusers", Object.keys(usersocketMap))

        socket.on("disconnect", () => {
            delete usersocketMap[userId]
            io.emit("getonlineusers", Object.keys(usersocketMap))
        })
    }
})

export { io, server, app }