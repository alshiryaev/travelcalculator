const {Product} = require('./models/product');


const productsRepository = {
    getAll: () => Product.findAll(),
    addProduct: (newProduct) => Product.create({ ...newProduct
    }),
    deleteProduct: (id) => Product.destroy({
        where: {
            id: id
        }
    }),
    updateProduct: (product) => Product.update({ ...product
    }, {
        where: {
            id: product.id
        },
        returning: true
    })
}

module.exports.productsRepository = productsRepository;