const express = require('express');
const router = express.Router();
var Post = require('../models/content.js');

router.route('/')
    .get(function (req, res, next) {
        Post.find({},{author:0,content:0},(err,result)=>{
            if(!err){
                res.json(result);
            }
            else{
                console.log(err);
            }
        })
    });

router.route('/:blog_id')
    .get(function (req, res, next) {
        Post.find({_id:req.params.blog_id},{description:0},(err,result)=>{
            if(!err){
                res.json(result);
            }
            else{
                console.log(err);
            }
        })
    });

module.exports = router;