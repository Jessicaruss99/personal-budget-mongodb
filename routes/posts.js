const express = require('express');
const router = express.Router();
//const Post = require('../models/budget_schema.js');
const budget_schema = require('../models/budget_schema.js');


// GETS ALL THE DATA FROM DATABASE
router.get('/', async (req,res) => {
    try{
       const posts = await budget_schema.find();
       res.json(posts);
    }catch(err){
        res.json({message:err});
    }
    
});

//POSTS DATA TO DATABASE
router.post('/', async (req,res) => {
   const post = new budget_schema({
          title: req.body.title,
          budget: req.body.budget,
          color: req.body.color
   });
   try {
       const savedPost = await post.save();
       res.json(savedPost)
   } catch(err) {
       res.json({message: err });
   }
       
});


module.exports = router;