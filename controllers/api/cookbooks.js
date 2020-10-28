const Cookbook = require("../../models/cookbook");
const Recipe = require("../../models/recipe");

module.exports = {
  index,
};

// function index(req, res) {
//   Cookbook.find({}, function (err, cookbooks) {
//     Recipe.find({}, function (err, recipes) {
//       var strbook = JSON.stringify(cookbooks);
//       var strrecipe = JSON.stringify(recipes);
//       console.log(typeof cookbooks);
//       // res.status(200).json(strbook + strrecipe);
//       res.status(200).json(cookbooks);
//     });
//   });
// }

// function index(req, res) {
//   Cookbook.find({}, function (err, cookbooks) {
//     console.log(cookbooks);
//     Recipe.find({
//       cookbook: cookbooks[1]._id,
//     })
//       .populate("cookbook") //ref in model
//       .exec(function (err, recipes) {
//         if (err) {
//           return res.send(err);
//         }
//         res.status(200).json(recipes);
//       });
//   });
// }

// function index(req, res) {
//   Cookbook.find({}, function (err, cookbooks) {
//     console.log(cookbooks[1]._id);
//     Recipe.find({
//       cookbookId: cookbooks[1]._id,
//     })
//       .populate("cookbookId") //ref in model
//       .exec(function (err, recipes) {
//         if (err) {
//           return res.send(err);
//         }
//         res.status(200).json(recipes);
//       });
//   });
// }

function index(req, res) {
  Recipe.find({}, function (err, recipes) {
    Cookbook.find({ _id: recipes[0].cookbookId }, function (err, cookbook) {
      console.log(cookbook);
      var bookString = JSON.stringify(cookbook);
      var bookParsed = JSON.parse(bookString);
      console.log(bookParsed);
      var recipesString = JSON.stringify(recipes);
      var recipesParsed = JSON.parse(recipesString);
      console.log(recipesParsed);
      console.log(recipes.length);
      var combinedObj = [];
      combinedObj.push(cookbook[0]);
      for (var i = 0; i < recipes.length; i++) {
        combinedObj.push(recipes[i]);
      }
      // combinedObj.push(cookbook);//this will create multi dimensional array
      // combinedObj.push(recipes);//[[{}][{}{}{}]]book obj first and recipes later
      // console.log(combinedObj);
      if (err) {
        return res.send(err);
      }
      res.status(200).json(combinedObj);
    });
  });
}

// var bookString = JSON.stringify(cookbooks);
// var bookParsed = JSON.parse(bookString);

// var combinedObj = [];

// for (var i = 0; i < recipes[0].length; i++) {
//   combinedObj.push(Object.assign({}, par[0][j], par[1][j], notes[j]));
// }
