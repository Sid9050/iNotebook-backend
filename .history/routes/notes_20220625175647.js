const express=require('express');
const router=express.Router();
const Notes=require('../models/Notes');
const fetchuser = require('../middleware/fetchuser');
const { body, validationResult } = require("express-validator");


//Route-1: Get all the notes using: GET:"/api/auth/fetchallnotes". Login required
router.get('/fetchallnotes',fetchuser,async (req,res)=>{
    try{
        const notes=await Notes.find({user: req.user.id});
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
      }
    
})

//Route-2: Add a new note using: POST:"/api/auth/addnote". Login required
router.get('/addnote',fetchuser,[
    body('title','Enter a valid title').isLength({min:3}),
    body('description','Enter a valid description').isLength({min:5}),
],async (req,res)=>{
    try{
        const {title,description,tag}=req.body;
        // If there are errors, return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }
        const note=await new Note{
            title,description,tag, user:req.user.id
        }
        res.json(notes);
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
      }
    
})

module.exports=router