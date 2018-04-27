var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    // category: {
    //     type: String,
    //     required: true
    // },
    // prepTime: {
    //     type: Number,
    //     required: true
    // },
    // cookTime: {
    //     type: Number,
    //     required: true
    // },
    // servingSize: {
    //     type: Number,
    //     required: true
    // },
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
