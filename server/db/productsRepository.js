const { db } = require('../db');

const product = db.sequelize.import(__dirname + "/models/product");

const productsRepository = {
    getAll: () => {
        return product.findAll()
    },
    addProduct: (newProduct) => product.create({
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