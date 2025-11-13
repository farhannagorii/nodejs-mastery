let express = require("express")
let app = express()
let fs = require("fs")
let status = require("express-status-monitor")
app.use(status())
let zlib = require("zlib")

//createed zip file by stream in Node.js

fs.createReadStream("./streamdoc.txt","utf-8").pipe(zlib.createGzip().pipe(fs.createWriteStream("./streamzip.zip")))

app.get("/",(req ,res)=>{
  // sync wise data read

//  let result =   fs.readFileSync("./streamdoc.txt","utf-8")
//       res.send(result)

 // async wise data reads
//  fs.readFile("./streamdoc.txt","utf-8",(err,data)=>{
//     res.send(data)
//  })
 
let stream=fs.createReadStream("./streamdoc.txt","utf-8");
stream.on("data",(chunk)=>res.write(chunk))
stream.on("end",()=>res.end())

})



                   
app.listen(8000,()=>{
    console.log("server is running on 8000")
})