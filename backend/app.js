require("dotenv").config(); //dotenv

const createError = require("http-errors");
const express = require("express");
const app = express();
const compression = require("compression");

const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sequelize = require("./DB/database").sequelize;
const cors = require("cors");
const userdb = require("./DB/database").users;
const multer = require("multer");
const upload = multer({ dest: "./public.images" });

const session = require("express-session"); //session
const MySQLStore = require("express-mysql-session")(session);
const mysql = require("mysql");
const LocalStorage = require("passport-local").Strategy;
const options = {
  host: "localhost",
  port: 3307,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: "my_blog",
};
var connection = mysql.createConnection(options);

const sessionStore = new MySQLStore(options, connection);

const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth.js");
const passport = require("passport");

app.use(
  session({
    secret: process.env.SESSION_PASSWORD,
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

//DB

const isItConnected = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({
    //   force: true,
    // });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
isItConnected();
// view engine setup

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(compression());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  done(null, email);
});
app.use("/", indexRouter);
app.use("/auth", authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
passport.use(
  new LocalStorage(
    { usernameField: "email", passwordField: "password" },
    (email, password, done) => {
      console.log(1);
      userdb.findOne({ where: { email: email } }).then((user) => {
        if (!user) {
          return done(null, false, { message: "Incorrect Username" });
        }
        if (user.dataValues.password != password) {
          return done(null, false, { message: "Incorrect password" });
        }
        console.log(user);
        return done(null, user);
      });
    }
  )
);
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
