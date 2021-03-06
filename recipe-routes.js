var express = require('express');

var app = module.exports = express.Router();

var Recipe = require('./recipe');

// POST
// Create a new recipe
app.post('/recipes', function (req, res) {
  if (!req.body.title) {
    return res.status(400).send({ "success": false, "msg": "You need to enter a recipe!" });
  }

  // Map the values of the schema to the request body values
  var newRecipe = new Recipe({
    title: req.body.title,
    category: req.body.category,
    prepTime: req.body.prepTime,
    cookTime: req.body.cookTime,
    servingSize: req.body.servingSize,
    ingredients: req.body.ingredients,
    directions: req.body.directions
  });

  // If there is an error return a data message to the console
  newRecipe.save(function (err) {
    if (err) {
      console.log("some error: ", err);
      return res.json({ "success": false, "msg": "Error while creating Recipe", "error": err });
    }
    // If the recipe creation was successful also return a message
    res.status(201).send({ "success": true, "msg": 'Successful created new recipe.' });
  });
});

// GET
// Get all open recipes
app.get('/recipes', function (req, res) {
  Recipe.find({}, function (err, recipes) {
    if (err) {
      return res.json({ "success": false, "msg": "Error while creating recipe", "error": err });
    }

    res.status(200).send({ "success": true, "result": recipes });
  });
});

// DELETE
// Remove one recipe by its ID
app.delete('/recipes/:recipeID', function (req, res) {
  var lectionId = req.params.recipeID;
  if (!lectionId || lectionId === "") {
    return res.json({ "success": false, "msg": "You need to send the ID of the Recipe", "error": err });
  }

  // Locate the recipe by its ID and remove it
  // The ID is gotten from the request parametres
  Recipe.findByIdAndRemove(lectionId, function (err, removed) {
    if (err) {
      return res.json({ "success": false, "msg": "Error while deleting Recipe", "error": err });
    }
    res.status(200).json({ "success": true, "msg": "Recipe deleted" });
  });
});
