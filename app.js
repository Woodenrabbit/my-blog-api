// 引入相关模块
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
//post请求无法获取传递过来的参数
const bodyParser = require("body-parser");

// 实例化一个express对象
let app = express();
//使用静态资源库
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//配置模板引擎
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// 给app绑定路由，所有通过"/"的url都将通过以下方法
app.use("/", require('./routers/index.js'));
app.use("/content", require('./routers/main.js'));
app.use("/user", require('./routers/user.js'));

// 监听8080端口
mongoose.connect("mongodb://localhost:27017/blog_db",(err)=>{
    if(!err){
        app.listen(3000, ()=>console.log('server is runing at http://localhost:3000'));
    }
    else{
        console.log("database can't connet"+err);
	throw err;
    }
})
