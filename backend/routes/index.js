var express = require("express");
var router = express.Router();

//DB

const posts = require("../DB/database").posts;
const comments = require("../DB/database").comments;

/* GET home page. */
router.post("/api/create_post", function (req, res, next) {
  console.log(req.body);
  posts.create(req.body).then(() => {
    res.redirect("/");
  });
});

//Comment
router.post("/api/create_comment?:id", function (req, res, next) {
  const id = req.query.id;

  comments.create({ ...req.body, postid: id }).then(() => {
    res.redirect(`/post/${id}`);
  });
});

router.get("/api/get_comment?:id", (req, res) => {
  const id = req.query.id;

  comments
    .findAll({
      where: {
        postid: id,
      },
    })
    .then((data) => {
      res.status(200).send(data);
    });
});

//Post
router.get("/api/create_post", function (req, res, next) {
  res.send("Hello world!");
});

router.get("/api/get_post", (req, res) => {
  posts.findAll().then((value) => {
    res.send(value);
  });
});

router.get("/api/get_a_post?:id", (req, res) => {
  const id = req.query;
  posts
    .findOne({
      where: {
        id: id.id,
      },
    })
    .then((data) => {
      console.log(data);
      res.send(data);
    });
});

router.post("/api/delete?:id", (req, res) => {
  const id = req.query.id;
  console.log(id);
  posts
    .destroy({
      where: {
        id: id,
      },
    })
    .then(() => {
      res.status(200).redirect("/");
    });
});

module.exports = router;
