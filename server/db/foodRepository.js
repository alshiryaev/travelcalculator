const db = require('../db/models/index');
const { v4 } = require('uuid');

const food = db.food;
const recipe = db.recipe;
const dayTimeTypes = db.dayTimeType;
const travelTypes = db.travelType;
const ingredient = db.ingredient;
const product = db.product;

const foodsRepository = {
    getAll: async () => {
        const foods = await food.findAll({ include: [dayTimeTypes, travelTypes, recipe, { model: ingredient, include: [product] }] });
        return foods;
    },
    getAllDayTimeTypes: () => dayTimeTypes.findAll(),
    getAllTravelType: () => travelTypes.findAll(),
    addFood: async (newFood) => {
        const addedRecipe = await recipe.create({
            id: v4(),
            name: newFood.name,
            description: newFood.recipe
        });
        const createdFood = await food.create({
            id: v4(),
            ...newFood,
            recipeId: addedRecipe.id
        });

        const promises = newFood.ingredients.map(i => ingredient.create({
            id: v4(),
            quantity: i.quantity,
            productId: i.id,
            foodId: createdFood.id
        }));
        await Promise.all(promises);
        createdFood.addDayTimeTypes(newFood.dayTimeTypes);
        return createdFood.addTravelTypes(newFood.travelTypes);
    },
    getRecipes: () => recipe.findAll()
}

module.exports.foodsRepository = foodsRepository;