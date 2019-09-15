const express = require('express');
const router = express.Router();
const contentModel = require("../models/content")
const moment = require("moment");

router.get("/", (req, res, next)=>{
    res.render("index");
});

// 增
router.post("/add", (req, res, next) => {
    let title = req.body.title;
    let tags = req.body.tags.split(' ');
    let content = req.body.content;
    let description = req.body.description || content.substring(0,10);
    let addTime = req.body.addTime || moment().format('YYYY-MM-DD HH:mm');
    let editTime = addTime;

    contentModel.create({
        title: title,
        tags: tags,
        content: content,
        description: description,
        addTime: addTime,
        editTime: editTime
    }, (err) => {
        if (!err) {
            res.send("提交成功！");
        } else {
            res.send("提交失败！"+err);
        }
    });
});

//改
router.put("/:blog_id", (req, res, next) => {
    let id = req.params.blog_id;
    let tags = req.body.tags.split(' ');
    let content = req.body.content;
    let editTime = req.body.editTime || moment().format('YYYY-MM-DD HH:mm');

    contentModel.update({_id: id},{$set:{tags: tags, content: content, editTime: editTime}}, (err) => {
        if (!err) {
            res.send("提交成功！");
        } else {
            res.send("提交失败！"+err);
        }
    });
});

module.exports = router;
