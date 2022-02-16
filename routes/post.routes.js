const router = require("express").Router();
const mongoose = require("mongoose");
const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

const Post = require("../models/post.model")

router
    .route("/create-post")
    .get((req, res, next) => {
        res.render("post/post-form")
    })
    .post((req, res, next) => {
        const content = req.body.content
        const creatorId = req.body.creatorId
        const picPath = req.body.picPath
        const picName = req.body.picName
        console.log("preparing post")
        
    Post.create({content, creatorId, picPath, picName})
        .then((createdPost) => {
            res.render("index")
            console.log("created post")
        }).catch((error) => {console.log(error)})

    })

    





module.exports = router;