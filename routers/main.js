const express = require('express');
const router = express.Router();
const contentModel = require("../models/content")

router.get("/", (req, res, next)=>{
    res.render("index");
});

// 内容添加的保存
router.post("/add", (req, res, next) => {
    let title = req.body.title;
    let category = req.body.category;
    let description = req.body.description;
    let content = req.body.content;
    // 后端进行简单的验证
    if (title === "") {
        // 如果标题为空，渲染错误页面
        res.render("admin/error", {
            url: null,
            userInfo: req.userInfo,
            message: "标题不能为空"
        });
        return;
    } else if (description === "") {
        // 如果简介为空，渲染错误页面
        res.render("admin/error", {
            url: null,
            userInfo: req.userInfo,
            message: "简介不能为空"
        });
        return;
    } else if (content === "") {
        // 如果正文为空，渲染错误页面
        res.render("admin/error", {
            url: null,
            userInfo: req.userInfo,
            message: "正文不能为空"
        });
        return;
    } else {
        // 一切正常，存入数据库
        contentModel.create({
            title: title,
            category: category,
            author: "woodenrabbit",
            description: description,
            content: content
        }, (err) => {
            if (!err) {
                // 保存成功
                res.send("提交成功！");
            } else {
                throw err;
            }
        });
    }
});

module.exports = router;