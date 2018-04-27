var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    categories: [{
        value: String
    }],
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
