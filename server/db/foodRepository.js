const db = require('../db/models/index');
const { v4 } = require('uuid');

const food = db.food;
const recipe = db.recipe;
const dayTimeTypes = db.dayTimeType;
const travelTypes = db.travelType;
const ingredient = db.ingredient;

const foodsRepository = {
    getAll: () => food.findAll({ include: ['dayTimeTypes', 'travelTypes', 'recipe'] }),
    getAllDayTimeTypes: () => dayTimeTypes.findAll(),
    getAllTravelType: () => travelTypes.findAll(),
    addFood: async (newFood) => {
        const createdFood = await food.create({
            id: v4(),
            ...newFood
        });
        const addedRecipe = await recipe.create({
            id: v4(),
            name: newFood.name,
            description: newFood.recipe
        });
        await createdFood.setRecipe(addedRecipe.id);
        const promises = newFood.ingredients.map(i => ingredient.create({
            id: v4(),
            quantity: i.quantity
        }));
        const ingredients = await Promise.all(promises);
        const ids = ingredients.map(x => x.id);
        createdFood.addIngredients(ids)
        createdFood.addDayTimeTypes(newFood.dayTimeTypes);
        createdFood.addTravelTypes(newFood.travelTypes);
    },
    getRecipes: () => recipe.findAll()
}

module.exports.foodsRepository = foodsRepository;