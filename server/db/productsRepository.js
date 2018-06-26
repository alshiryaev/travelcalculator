const Product = require('./models/product').product;


const productsRepository = {
    getAll: () => Product.findAll()
}

module.exports.productsRepository = productsRepository;