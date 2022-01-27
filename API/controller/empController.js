const express=require('express')
const EmpModel=require('../db/employeeSchema')
const { check, validationResult } = require('express-validator')

 const addEmp=async (req,res)=>{
    const emp=req.body;
    
    const newEmp=new EmpModel({...emp})
    try{
        await newEmp.save()
        res.status(200).json(newEmp)

    }
    catch(error){
         res.status(400).json(error.message)
    }
}

 const getEmp=async(req,res)=>{
  await EmpModel.find({},(err,data)=>{
       if(err)throw err;
       console.log(data)
       res.json(data)
   })
        // const emp=await EmpModel.find()
        //    res.status(200).json(emp)
       
}

const updateEmp=async(req,res)=>{
    let id=req.params.id;
    console.log(id)
    console.log(req.body)
    const updatedProfile = await EmpModel.findByIdAndUpdate(id, {...req.body, id})
    res.json(updatedProfile)
   
}
 const deleteEmp=async(req,res)=>{
    let id=req.params.id;
    console.log(id)
    const emp=await EmpModel.deleteOne({_id:id},(err,data)=>{
        if(err) throw err;
        res.send("deleted")
    })

}

module.exports={addEmp,getEmp,deleteEmp,updateEmp}