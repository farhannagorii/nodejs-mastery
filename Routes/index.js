import express from "express";
let app = express()
let PORT = "8000"

// ROUTING

app.get("/",(req ,res)=>{
    res.send("this is home api")
})

app.post("/user-insert",(req,res)=>{
    res.send("this is user created api")
})

// DAINEMIN ROUTING

app.get("/order/:id",(req,res)=>{
    let {id}=req.params.id
    res.send({
        status:1,
        msg:"this is dainamin order api",
        id
    })
})


// example of all methods

app.get("/users",(req,res)=> res.send("get all users"))
app.post("/users",(req,res)=>res.send("user created"))
app.put("/uupdate/:id",(req,res)=> res.send("all data updted"))
app.patch("/uupdate/:id",(req,res)=> res.send("ONE field of data updted"))
app.delete("/udelete/:id",(req,res)=> res.send("delete data updted"))



// middelwere example of routing

 export let veryfy =(req,res,next)=>{
    console.log("user verify")
    next()
}


app.get("/deshboard", veryfy , (req,res)=>{
    res.send("welcome to deshkboard ")
} )



// routes chaining

app.route("/users")
  .get((req,res)=> res.send("get users"))
  .post((req,res)=>res.send("insert user"))
  

app.route("/users/:id")
    .get((req,res)=>res.send("get single user"))
    .put((req,res)=>res.send("update single user"))
    .delete((req,res)=>res.send("delete single user"))



app.listen(PORT,()=>{
    console.log("server is running")
})