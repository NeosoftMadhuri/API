const express=require('express')
const mongoose=require('mongoose')
const app=express();
const PORT=8899;
const connectDB=require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

 
const empRoute=require('./routes/EmployeeRoute')
app.use('/emp',empRoute)
// connectDB();
app.listen(PORT,(err,data)=>{
    if(err)throw err
    console.log(`server running on port :${PORT}`)
})