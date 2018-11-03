const  db = require('../db/models/index');
const { v4 } = require('uuid');

const food = db.sequelize.import(__dirname + "/models/food");

const foodsRepository = {
    getAll: () => {
        return food.findAll()
    }   
}

module.exports.foodsRepository = foodsRepository;