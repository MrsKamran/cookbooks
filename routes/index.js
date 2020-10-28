var router = require("express").Router();
const passport = require("passport");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// The root route renders our only view
router.get("/", function (req, res) {
  res.redirect("/cookbooks");
});

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/cookbooks",
    failureRedirect: "/cookbooks",
  })
);

// OAuth logout route
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/cookbooks");
});

module.exports = router;
