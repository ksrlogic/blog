const express = require("express");
const router = express.Router();
const userdb = require("../DB/database").users;
const validator = require("email-validator");
const passwordValidator = require("password-validator");
const schema = new passwordValidator();
const passport = require("passport");

// router.post("/login", async (req, res) => {
//   const data = req.body;
//   const findEmail = await userdb.findOne({
//     where: {
//       email: data.email,
//     },
//   });

//   await console.log(findEmail.dataValues);

//   if (findEmail.dataValues.password === data.password) {
//     req.session.isLogined = true;
//     res.redirect("/");
//   } else {
//     res.redirect("/login");
//   }
// });

//Password Validation
schema.is().min(8).is().max(100).has().digits().has().not().spaces();

//Register
router.post("/register", (req, res) => {
  console.log(req.body);
  const data = req.body;
  if (
    data.password === data.verifyPassword &&
    validator.validate(data.email) &&
    schema.validate(data.password)
  ) {
    userdb
      .findAll({
        where: {
          email: data.email,
        },
      })
      .then((value) => {
        if (value[0]) {
          throw value;
        }
      })
      .then(() => {
        userdb.create({
          email: data.email,
          password: data.password,
        });
        res.redirect("/login");
      })
      .catch((value) => {
        console.log(`Already Exist ${value}!`);
        res.send("잘못된 접근입니다.");
      });
  } else {
    res.redirect("/register");
  }
});
//Login
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

router.get("/login", (req, res) => {
  res.send(req.session);
});
router.post("/logout", (req, res) => {
  req.logOut();
  res.redirect("/");
});
router.get("/register", (req, res) => {
  res.send("HI");
});

router.get("/", (req, res) => {
  res.send("1234");
});

module.exports = router;
