const express = require("express");
const router = express.Router();
const recipeCtrl = require("../controllers/recipes");

router.get("/cookbooks/:id/recipes", recipeCtrl.index);
router.get("/cookbooks/:id/recipes/new", recipeCtrl.new);
router.get("/cookbooks/:id/recipes/showAll", recipeCtrl.showAll);
router.get("/cookbooks/:id/recipes/:id2", recipeCtrl.show);
router.post("/cookbooks/:id/recipes", recipeCtrl.create);

router.post("/cookbooks/:id/recipes/:id2/update", recipeCtrl.updateinDB); //updates recipe page
router.get("/cookbooks/:id/recipes/:id2/update", recipeCtrl.update); //display update recipe form
router.get("/cookbooks/:id/recipes/:id2/delete", recipeCtrl.deleteOne); //deletes one recipe

router.post(
  "/cookbooks/:id/recipes/:id2/ingredients",
  recipeCtrl.createIngredient
); //updates recipe page
router.get("/cookbooks/:id/recipes/:id2/ingredients", recipeCtrl.newIngredient); //display update recipe form
router.get(
  "/cookbooks/:id/recipes/:id2/ingredients/:id3",
  recipeCtrl.deleteIngredient
); //deletes one recipe

router.post(
  "/cookbooks/:id/recipes/:id2/instructions",
  recipeCtrl.createInstruction
); //updates recipe page
router.get(
  "/cookbooks/:id/recipes/:id2/instructions",
  recipeCtrl.newInstruction
); //display update recipe form
router.get(
  "/cookbooks/:id/recipes/:id2/instruction/id3",
  recipeCtrl.deleteInstruction
); //deletes one recipe

module.exports = router;
