const Recipe = require('../models/Recipe');

exports.createRecipe = async (req, res) => {
    const { name, ingredients, instructions, createdBy } = req.body;
    try {
        const recipe = new Recipe({ name, ingredients, instructions, createdBy });
        await recipe.save();
        res.status(201).send('Recipe created');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.send(recipes);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(recipe);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.deleteRecipe = async (req, res) => {
    try {
        await Recipe.findByIdAndDelete(req.params.id);
        res.send('Recipe deleted');
    } catch (error) {
        res.status(400).send(error.message);
    }
};
