const express=require('express')
const { check, validationResult } = require('express-validator')
const router=express.Router();

const {getEmp,addEmp,deleteEmp,updateEmp}=require('../controller/empController')

router.get('/',getEmp)
router.post('/addemp',addEmp)
router.put('/update/:id',updateEmp)
router.delete('/delete/:id',deleteEmp)

module.exports=router;
