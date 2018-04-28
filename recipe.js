var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Recipe Schema
var RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    prepTime: {
        type: Number,
    },
    cookTime: {
        type: Number,
    },
    servingSize: {
        type: Number,
    },
    ingredients: {
        type: String,
    },
    ingredients: {
        type: String,
    },
    created_at: Date,
});

// Execute before the recipe is saved to the database
RecipeSchema.pre('save', function (next) {
    var recipe = this;
    // get the current date
    var currentDate = new Date();

    // if created_at doesn't exist, add the date to that field
    if (!recipe.created_at) {
        recipe.created_at = currentDate;
    }
    next();
});

module.exports = mongoose.model('Recipe', RecipeSchema);
