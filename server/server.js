const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./db').db;
const productRepository = require('./db/productsRepository').productsRepository;


app.get('/api/products', (req, res) => {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    productRepository.getAll().then(products => {
        res.send(products);
    })
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Listening on port ${port}`));