const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const fakeProducts = require('./testProducts').products;
const db = require('./db').db;

// api routes
app.get('/api/products', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(fakeProducts);
});

// dd connection test
db.test();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, () => console.log(`Listening on port ${port}`));