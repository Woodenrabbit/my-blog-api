const express = require('express');
const router = express.Router();
const contentModel = require("../models/content")

router.get("/", (req, res, next)=>{
    res.render("index");
});

// 内容添加的保存
router.post("/add", (req, res, next) => {
    let title = req.body.title;
    let tags = req.body.tags.split(' ');
    let content = req.body.content;
    let description = req.body.description || content.substring(0,10);

    contentModel.create({
        title: title,
        tags: tags,
        content: content,
        description: description
    }, (err) => {
        if (!err) {
            res.send("提交成功！");
        } else {
            res.send("提交失败！"+err);
        }
    });
});

router.put("/:blog_id", (req, res, next) => {
    let id = req.params.blog_id;
    let title = req.body.title;
    let tags = req.body.tags.split(' ');
    let content = req.body.content;
    let editTime = req.body.editTime;

    contentModel.update({_id: id},{$set:{title:title, tags: tags, content: content, editTime: editTime}}, (err) => {
        if (!err) {
            res.send("提交成功！");
        } else {
            res.send("提交失败！"+err);
        }
    });
});

module.exports = router;
