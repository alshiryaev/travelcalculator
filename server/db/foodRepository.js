const  db = require('../db/models/index');
const { v4 } = require('uuid');

const food = db.sequelize.import(__dirname + "/models/food");
const dayTimeTypes = db.sequelize.import(__dirname + "/models/daytimetype");
const travelTypes = db.sequelize.import(__dirname + "/models/traveltype");

const foodsRepository = {
    getAll: () => {
        return food.findAll()
    },    
    getAllDayTimeTypes: () => {
        return dayTimeTypes.findAll();
    },
    getAllTravelType: () => {
        return travelTypes.findAll();
    },
    addFood: (newFood) => food.create({
        id: v4(),
        ...newFood
    }),
}

module.exports.foodsRepository = foodsRepository;