const express=require('express');
const router=express.Router();
const Notes=require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");


//Route-1: Get all the notes using: GET:"/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    const notes=await Notes.find({user: req.user.id});
    res.json(notes);
})

//Route-2: Add a new note using: POST:"/api/auth/addnote". Login required
router.get('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('title','Enter a valid title').isLength({min:3}),
],async (req,res)=>{
    res.json(notes);
})

module.exports=router