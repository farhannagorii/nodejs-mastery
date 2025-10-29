import mongoose from "mongoose"


let Dbconnect= async  ()=>{
    try {
        await mongoose.connect(process.env.DATABASE)
        console.log('mongoose is working')
    } catch (error) {
        console.log(error)
    }
}

export default Dbconnect