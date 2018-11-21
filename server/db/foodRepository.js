const db = require('../db/models/index');
const { v4 } = require('uuid');

const food = db.food;
const recipe = db.recipe;
const dayTimeTypes = db.dayTimeType;
const travelTypes = db.travelType;

const foodsRepository = {
    getAll: () => food.findAll({ include: ['dayTimeTypes', 'travelTypes', 'recipe'] }),
    getAllDayTimeTypes: () => dayTimeTypes.findAll(),
    getAllTravelType: () => travelTypes.findAll(),
    addFood: (newFood) => food.create({
        id: v4(),
        ...newFood
    }).then(createdFood =>
        recipe.create({
            id: v4(),
            name: newFood.name,
            description: newFood.recipe
        }).then(addedRecipe => {
            createdFood.setRecipe(addedRecipe.id);
            createdFood.addDayTimeTypes(newFood.dayTimeTypes);
            createdFood.addTravelTypes(newFood.travelTypes);
        })
    )
}

module.exports.foodsRepository = foodsRepository;