const express = require('express');
const router = express.Router();
const contentModel = require("../models/content")

// router.get('/',(req,res)=>{
//     res.render("index");
// });

router.get("/", (req, res, next)=>{
    contentModel.find({},(err,all)=>{
        if(!err){
            res.json(all);
        }
        else{
            throw err;
        }
    });
})

module.exports = router;