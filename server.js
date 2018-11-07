const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const { productsRepository } = require('./server/db/productsRepository');
const { foodsRepository } = require('./server/db/foodRepository');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const cors = require('cors');

app.use(cors());

app.get('/api/products', (req, res) => {
    productsRepository.getAll().then(products => {
        res.send(products);
    })
});

app.post('/api/products', jsonParser, (req, res) => {
    if (!req.body)
        return res.sendStatus(400);
    productsRepository.addProduct(req.body).then(result => res.json(result))
});

app.delete('/api/products', (req, res) => {
    productsRepository.deleteProduct(req.query.id).then(() => res.sendStatus(200));
});

app.put('/api/products', jsonParser, (req, res) => {
    productsRepository.updateProduct(req.body).then(result => {
        res.sendStatus(200)
    });
});

app.get('/api/dayTimeTypes', (req, res) => {
    foodsRepository.getAllDayTimeTypes().then(dayTimeTypes => {
        res.send(dayTimeTypes);
    })
});

app.get('/api/travelTypes', (req, res) => {
    foodsRepository.getAllDayTimeTypes().then(dayTimeTypes => {
        res.send(dayTimeTypes);
    })
});

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));