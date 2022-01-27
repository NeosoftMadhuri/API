const mongoose=require('mongoose')
const empSchema=new mongoose.Schema({
    ename:{type:String,required:true},
    eemail:{type:String,required:true},
    eaddress:{type:String,required:true},
    esalary:{type:String,required:true},
    edemp:{type:String,required:true}
})

module.exports=mongoose.model('EMP',empSchema);