const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes');

router.get('/cookbooks/:id/recipes', recipeCtrl.index);
router.get('/cookbooks/:id/recipes/new', recipeCtrl.new);
router.get('/cookbooks/:id/recipes/:id2', recipeCtrl.show);
router.post('/cookbooks/:id/recipes', recipeCtrl.create);

router.post('/cookbooks/:id/recipes/:id2/update',recipeCtrl.updateinDB);//updates recipe page 
router.get('/cookbooks/:id/recipes/:id2/update',recipeCtrl.update);//display update recipe form
router.get('/cookbooks/:id/recipes/:id2/delete', recipeCtrl.deleteOne);//deletes one recipe

module.exports = router;