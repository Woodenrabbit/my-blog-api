const express = require('express');
const router = express.Router();
var User = require('../models/user.js');

//admin 验证
router.post("/manage", (req, res, next) => {
    let username = req.body.username;
    let password = req.body.password;

    User.find({username: username, password: password},(err,result)=>{
        if(!err){
            if(result.length != 0){
                res.json({
                    status: 200,
                    data: '登陆成功'
                })
            }
            else{
                res.json({
                    status: 300,
                    data: '密码错误'
                })
            }
        }
        else{
            console.log(err);
            res.json({
                status: 300,
                data: '登陆失败'
            })
        }
    })
});

// router.post("/create", (req, res, next) => {
//     let username = req.body.username;
//     let password = req.body.password;

//     User.create({username: username, password: password},err =>{
//         console.log(err);
//     })
// });

module.exports = router;