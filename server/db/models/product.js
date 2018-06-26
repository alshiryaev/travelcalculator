const db = require('../../db').db;
const Sequelize = require('sequelize');

module.exports.product = db.sequelize.define('Product', {
  name: Sequelize.STRING,
  protein: Sequelize.DOUBLE,
  fat: Sequelize.DOUBLE,
  carbohydrates: Sequelize.DOUBLE,
  calories: Sequelize.DOUBLE
}, {
  timestamps: false
});