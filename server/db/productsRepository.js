const Product = require('./models/product').product;


const productsRepository = {
    getAll: () => Product.findAll(),
    addProduct: (newProduct) => Product.create({ ...newProduct}),
    deleteProduct: (id) => Product.destroy({
        where: {
            id: id
        }
    })
}

module.exports.productsRepository = productsRepository;