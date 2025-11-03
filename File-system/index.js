import express from "express"
let app=express()
import fs, { read } from "fs"


// “Write a Node.js program to read a text file and write its content to another file.”

fs.readFile("./demo.txt","utf8",(err,data)=>{
    if(err) throw err
    console.log(data)
   fs.writeFile("./copy.txt",data,(err)=>{
    console.log(data)
   })
})

// synch file reading

let result = fs.readFileSync("./copy.txt","utf-8")
console.log(result)


// “How can you add new content to an existing file without overwriting it?

fs.appendFile("./demo.txt","\n and i am 21 year old",(err,add)=>{
    if(err) throw err
    console.log(add)
})

// fs.unlink("./copy.txt",(err)=>{
//     if(err) throw err
    
// })

// Rename the file

// Rename demo.txt → myNotes.txt
fs.rename("./demo.txt", "./myNotes",(err)=>{
    if(err) throw err
})

fs.writeFile("./newfordelete", "new for delete",(err,data)=>{
    if(err) throw err
})

fs.unlink("./newfordelete",(err)=>{
    console.log("newfordelete.txt is deleted")
})
app.listen(8000,()=>{
    console.log("surver is running on 8000")
})