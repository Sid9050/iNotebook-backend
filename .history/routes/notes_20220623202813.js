const express=require('express');
const router=express.Router();
const User=require('../models/User');


router.get('/',(req,res)=>{
    console.log(req.body);
    res.send(req.body);
})

module.exports=router