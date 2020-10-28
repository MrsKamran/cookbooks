const Cookbook = require("../models/cookbook");
const Recipe = require("../models/recipe");

module.exports = {
  index,
  show,
  new: newCookbook,
  create,
  delete: deleteOne,
  showForewordPage,
  updateForewordPageinDB,
  updateForewordPage,
  showCoverPage,
  updateCoverPageinDB,
  updateCoverPage,
  updateBook,
  updateBookinDB,
};

function index(req, res) {
  Cookbook.find({}, function (err, cookbooks) {
    res.render("cookbooks/index", {
      title: "All Books",
      cookbooks,
      user: req.user,
      // name: req.query.name,
    });
  });
}

function show(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    res.render("cookbooks/show", {
      title: "Book Details",
      cookbook,
      user: req.user,
    });
  });
}

function newCookbook(req, res) {
  if (req.isAuthenticated()) {
    res.render("cookbooks/new", { title: "Add Cookbook" });
  } else {
    res.send("Please login first");
  }
}

function create(req, res) {
  console.log(req.body);
  console.log("create book");
  const cookbook = new Cookbook(req.body);
  cookbook.save(function (err) {
    if (err) {
      // console.log(err);
      return res.redirect("/cookbooks/new");
    }
    res.redirect(`/cookbooks/${cookbook._id}`);
  });
}

function deleteOne(req, res) {
  Cookbook.findByIdAndDelete(req.params.id, function (err) {
    if (err) console.log(err);
    res.redirect(`/cookbooks`);
  });
}

function showForewordPage(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    res.render("cookbooks/forewordpage", {
      title: "Foreword",
      cookbook,
      user: req.user,
    });
  });
}

function updateForewordPageinDB(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    if (req.body.foreword !== "") {
      cookbook.foreword = req.body.foreword;
    }
    cookbook.save(function (err) {
      res.redirect(`/cookbooks/${cookbook._id}/forewordpage`);
    });
  });
}

function updateForewordPage(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    res.render("cookbooks/forewordpageform", {
      title: "Add Forword Page",
      cookbook,
    });
  });
}

function showCoverPage(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    res.render("cookbooks/coverpage", {
      title: "Cover Page",
      cookbook,
      user: req.user,
    });
  });
}

function updateCoverPageinDB(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    if (req.body.coverImageURL !== "") {
      cookbook.coverImageURL = req.body.coverImageURL;
    }
    cookbook.save(function (err) {
      res.redirect(`/cookbooks/${cookbook._id}/coverpage`);
    });
  });
}

function updateCoverPage(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    res.render("cookbooks/coverpageform", {
      title: "Update Cover Page",
      cookbook,
    });
  });
}

function updateBookinDB(req, res) {
  console.log("inside update");
  Cookbook.findById(req.params.id, function (err, cookbook) {
    if (req.body.title !== "") {
      cookbook.title = req.body.title;
    }
    if (req.body.subtitle !== "") {
      cookbook.subtitle = req.body.subtitle;
    }
    cookbook.save(function (err) {
      res.redirect(`/cookbooks/${cookbook._id}`);
    });
  });
}

function updateBook(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    res.render("cookbooks/update", {
      title: "Update Book",
      cookbook,
    });
  });
}
