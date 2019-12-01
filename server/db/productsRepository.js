const db = require('../db/models/index');
const { v4 } = require('uuid');
const { Op } = require('sequelize');

const product = db.product;

const productsRepository = {
  getAll: filter =>
    filter
      ? product.findAll({
          where: {
            name: { [Op.iLike]: `%${filter}%` },
          },
        })
      : product.findAll(),

  addProduct: newProduct => product.create({ id: v4(), ...newProduct }),
  deleteProduct: id => product.destroy({ where: { id: id } }),
  updateProduct: editProduct =>
    product.update(
      { ...editProduct },
      { where: { id: editProduct.id }, returning: true }
    ),
};

module.exports.productsRepository = productsRepository;
