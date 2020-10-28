const express = require("express");
const router = express.Router();
const cookcookCtrl = require("../controllers/api/cookbooks");

router.get("/cookbooks/", cookcookCtrl.index);

module.exports = router;
