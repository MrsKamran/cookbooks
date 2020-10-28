const express = require("express");
const router = express.Router();
const booksCtrl = require("../controllers/cookbooks");

router.get("/", booksCtrl.index);
router.get("/new", booksCtrl.new);

router.get("/:id", booksCtrl.show);
router.post("/", booksCtrl.create);

router.post("/:id/update", booksCtrl.updateBookinDB); //updates book page
router.get("/:id/update", booksCtrl.updateBook); //display update book form

router.post("/:id/forewordpage/update", booksCtrl.updateForewordPageinDB); //updates foreword page
router.get(
  "/:id/forewordpage/update",
  isLoggedIn,
  booksCtrl.updateForewordPage
); //display update foreword form
router.get("/:id/forewordpage", booksCtrl.showForewordPage); //shows foreword page---working

router.post("/:id/coverpage/update", booksCtrl.updateCoverPageinDB); //updates foreword page
router.get("/:id/coverpage/update", isLoggedIn, booksCtrl.updateCoverPage); //display update foreword form
router.get("/:id/coverpage", booksCtrl.showCoverPage); //shows foreword page---working

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  // res.redirect("/auth/google");
  res.send("log in");
}
module.exports = router;
