const mongoose=require('mongoose')

//dbconnection
const db="mongodb://localhost:27017/Employee";
const connectDB=async()=>{
    try{
        await mongoose.connect(db,{useNewUrlParser:true});
        console.log("MongoDb connected")
    }
    catch(err){
        console.log(err.message)
    }
}
connectDB()
//end

module.exports=connectDB;