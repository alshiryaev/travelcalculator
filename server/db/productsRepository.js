const Product = require('./models/product').product;


const productsRepository = {
    getAll: () => Product.findAll(),
    addProduct: (newProduct) => Product.create({...newProduct})   

}

module.exports.productsRepository = productsRepository;