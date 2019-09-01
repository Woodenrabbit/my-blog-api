const express = require('express');
const router = express.Router();
var Post = require('../models/content.js');

router.route('/blog/:blog_id')
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

router.route('/blogs')
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

router.route('/blogs/:tag_name')
    .get(function (req, res, next) {
        Post.find({tags:req.params.tag_name},{author:0,content:0},(err,result)=>{
            if(!err){
                res.json(result);
            }
            else{
                console.log(err);
            }
        })
    });

router.route('/tags')
    .get(function (req, res, next) {
        Post.find({},{tags:1},(err,result)=>{
            if(!err){
                res.json(result);
            }
            else{
                console.log(err);
            }
        })
    });

module.exports = router;