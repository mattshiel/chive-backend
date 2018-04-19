var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    ingredients: [
      {
        value: String,
        description: String
        required: true
      }
    ],
    directions: {
      type: String,
      required: true

    }
    servingSize: Number,
    prepTime: Number,
    cookTime: Number,
    category: {
      type: String,
      required: true
    }
    created_at: Date,
});

RecipeSchema.pre('save', function (next) {
    var recipe = this;
    // get the current date
    var currentDate = new Date();

    // if created_at doesn't exist, add to that field
    if (!recipe.created_at) {
        recipe.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('Recipe', RecipeSchema);
