const db = require('../../db').db;
const Sequelize = require('sequelize');

module.exports.product = db.sequelize.define('Food', {
  name: Sequelize.STRING,
  dayTimeType: Sequelize.INTEGER,
  travelType: Sequelize.INTEGER,
  recipe: Sequelize.STRING
}, {
  timestamps: false
});

/*

Скорее всего здесь придется делать таблицы (?) для типов приема пищи - завтрак, обед, ужин, перекус
и для типов похода. Блюдо может иметь несколько таких групп - кашу можно есть всегда, кроме перекуса

*/
