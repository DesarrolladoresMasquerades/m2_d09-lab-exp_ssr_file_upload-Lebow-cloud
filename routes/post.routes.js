const router = require("express").Router();
const mongoose = require("mongoose");

const Post = require("../models/post.model")

router
    .route("/post-form")
    .get((req, res, next) => {
        res.render("post/post-form")
    })
    .post((req, res, next) => {
        const content = req.body.content
        const creatorId = req.body.creatorId
        const picPath = req.body.picPath
        const picName = req.body.picName

        Post.create({content, creatorId, picPath, picName})
        .then((createdPost) => {
            res.render("index")
        }).catch((error) => {console.log(error)})

    })





module.exports = router;