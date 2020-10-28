var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var methodOverride = require("method-override");
var session = require("express-session");
var passport = require("passport");

require("dotenv").config();
require("./config/passport");
require("./config/database");
require("mongoose-type-url");

const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
// create the Express app
var app = express();

// load the env vars

var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");
var cookbooksRouter = require("./routes/cookbooks");
var recipesRouter = require("./routes/recipes");
var apiRouter = require("./routes/api");

var app = express();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  session({
    secret: "SEI!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
// app.use("/users", usersRouter);
app.use("/cookbooks", cookbooksRouter);
app.use("/", recipesRouter);
app.use("/api", apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// imgur.getClientId('7c37e8d7e101a56');
// imgur.setAPIUrl('https://api.imgur.com/3/');
// const fs = require('fs');
// const imgurUploader = require('imgur-uploader');
// imgurUploader(fs.readFileSync('./public/images/star.png'), {title: 'Hello!'}).then(data => {
//     console.log(data);
// });

// const Cookbook = require('./models/cookbook');
// const router = express.Router();
// router.get('/cookbooks/json', function (req, res) {
//   Cookbook.find({}, function(err, cookbooks) {
//       res.status(200).json(cookbooks);
//   });
// }
// );

module.exports = app;
