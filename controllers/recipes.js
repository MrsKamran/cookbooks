const Cookbook = require("../models/cookbook");
const Recipe = require("../models/recipe");

module.exports = {
  index,
  show,
  showAll,
  new: newRecipeForm,
  create: createRecipe,
  updateinDB: updateRecipeinDB,
  update: updateRecipeForm,
  deleteOne: deleteOne,
  newIngredient,
  createIngredient,
  deleteIngredient,
  newInstruction,
  createInstruction,
  deleteInstruction,
};

function createRecipe(req, res) {
  console.log("create");
  const recipe = new Recipe(req.body);
  recipe.cookbookId = req.params.id;
  recipe.save(function (err) {
    if (err) return res.render(`/cookbooks/${req.params.id}`);
    console.log(recipe);
    res.redirect(`/cookbooks/${req.params.id}/recipes/showAll`);
  });
}

function index(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.find({}, function (err, recipes) {
      res.render("recipes/index", {
        title: "All Recipes",
        recipes,
        cookbook,
        user: req.user,
      });
    });
  });
}

function showAll(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.find({ cookbookId: req.params.id }, function (err, recipes) {
      res.render("recipes/index", {
        title: "All Recipes",
        recipes,
        cookbook,
        user: req.user,
      });
    });
  });
}

function show(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      res.render("recipes/show", {
        title: "Recipe Details",
        cookbookId: cookbook._id,
        cookbookTitle: cookbook.title,
        recipe,
        user: req.user,
      });
    });
  });
}

function newRecipeForm(req, res) {
  res.render("recipes/new", { title: "Add Recipe", cookbookId: req.params.id });
}

function updateRecipeinDB(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      if (req.body.name !== "") recipe.name = req.body.name;
      // if (req.body.instructions !== "")
      //   recipe.instructions = req.body.instructions;
      // if (req.body.ingredients !== "")
      //   recipe.ingredients = req.body.ingredients;
      if (req.body.imageURL !== "") recipe.imageURL = req.body.imageURL;
      recipe.save(function (err) {
        res.redirect(`/cookbooks/${cookbook._id}/recipes/${recipe._id}`);
      });
    });
  });
}

function updateRecipeForm(req, res) {
  console.log("get update");
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      res.render("recipes/update", {
        title: "Update Recipe",
        cookbookId: cookbook._id,
        cookbookTitle: cookbook.title,
        recipe,
      });
    });
  });
}

function deleteOne(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findByIdAndDelete(req.params.id2, function (err) {
      if (err) console.log(err);
      console.log("Successful deletion");
      res.redirect(`/cookbooks/${cookbook._id}/recipes`);
    });
  });
}

function newIngredient(req, res) {
  res.render("recipes/", {
    title: "Add Recipe",
    cookbookId: req.params.id,
    recipeId: req.params.id2,
  });
}

function createIngredient(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      recipe.ingredients.push(req.body);
      console.log(req.body);
      recipe.save(function (err) {
        // cookbook.save(function (err) {
        res.redirect(`/cookbooks/${cookbook._id}/recipes/${recipe._id}`);
        // });
      });
    });
  });
}
function deleteIngredient(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      recipe.ingredients.id(req.params.id3).remove();
      recipe.save(function (err) {
        res.redirect(`/cookbooks/${cookbook._id}/recipes/${recipe._id}`);
      });
    });
  });
}

function newInstruction(req, res) {
  res.render("recipes/", {
    title: "Add Recipe",
    cookbookId: req.params.id,
    recipeId: req.params.id2,
  });
}

function createInstruction(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      console.log(req.body);
      recipe.instructions.push(req.body);
      recipe.save(function (err) {
        res.redirect(`/cookbooks/${cookbook._id}/recipes/${recipe._id}`);
      });
    });
  });
}
function deleteInstruction(req, res) {
  Cookbook.findById(req.params.id, function (err, cookbook) {
    Recipe.findById(req.params.id2, function (err, recipe) {
      recipe.instructions.id(req.params.id3).remove();
      recipe.save(function (err) {
        res.redirect(`/cookbooks/${cookbook._id}/recipes/${recipe._id}`);
      });
    });
  });
}
