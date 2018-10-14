const { db } = require('../db');
const { v4} = require('uuid');

const product = db.sequelize.import(__dirname + "/models/product");

const productsRepository = {
    getAll: () => {
        return product.findAll()
    },
    addProduct: (newProduct) => product.create({
        id: v4(),
        ...newProduct
    }),
    deleteProduct: (id) => product.destroy({
        where: {
            id: id
        }
    }),
    updateProduct: (product) => product.update({
        ...product
    }, {
            where: {
                id: product.id
            },
            returning: true
        })
}

module.exports.productsRepository = productsRepository;