const express = require("express");
const router = express.Router();
const sanitizeHtml = require("sanitize-html");
//DB

const posts = require("../DB/database").posts;
const comments = require("../DB/database").comments;

/* GET home page. */
router.post("/api/create_post", function (req, res, next) {
  console.log(req.body);

  const title = sanitizeHtml(req.body.title);
  const description = sanitizeHtml(req.body.description);
  const author = sanitizeHtml(req.body.author);

  posts
    .create({
      title: title,
      description: description,
      author: author,
    })
    .then(() => {
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

router.get("/api/get_post?:id", async (req, res) => {
  const id = Number(req.query.id);
  let postCount = await posts.count({});

  if (postCount % 5 !== 0) {
    postCount -= postCount % 5;
  }
  const offset = postCount - (id - 1) * 5;

  await posts.findAll({ limit: 5, offset: offset }).then((value) => {
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
      res.send(data);
    });
});

router.get("/api/get_count", (req, res) => {
  posts.count({}).then((result) => {
    res.send(`${result}`);
  });
});
router.post("/api/delete?:id", (req, res) => {
  const id = req.query.id;
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
