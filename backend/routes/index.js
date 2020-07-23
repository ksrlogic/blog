const express = require("express");
const router = express.Router();
const sanitizeHtml = require("sanitize-html");
const multer = require("multer");
const path = require("path");
const randomString = require("crypto-random-string");

const storage = multer.diskStorage({
  destination: "../public/images/",
  filename: (req, file, cb) => {
    cb(null, randomString({ length: 20 }) + path.extname(file.originalname));
  },
});

const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;

  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());

  const mimetype = fileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Error : Images Only!");
  }
};

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
  limits: 1000000,
});
//DB

const posts = require("../DB/database").posts;
const comments = require("../DB/database").comments;

/* GET home page. */
router.post("/api/create_post", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const title = sanitizeHtml(req.body.title);
  const description = sanitizeHtml(req.body.description);
  const author = sanitizeHtml(req.body.author);
  if (req.file) {
    await posts.create({
      title: title,
      description: description,
      author: author,
      imagePath: `/images/${req.file.filename}`,
    });
  } else {
    await posts.create({
      title: title,
      description: description,
      author: author,
      imagePath: `/Sample.PNG`,
    });
  }

  res.redirect("/");
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
