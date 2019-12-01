const { productsRepository } = require('./server/db/productsRepository');
const { foodsRepository } = require('./server/db/foodRepository');
const passport = require('passport');

module.exports = function(app) {
  const loggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      next();
    } else return res.sendStatus(401);
  };

  app.post('/login', passport.authenticate('local'), (req, res) => {
    res.sendStatus(200);
  });

  app.get('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
  });

  app.get('/isAuth', (req, res) => {
    const isAuth = req.isAuthenticated();
    res.send(isAuth);
  });

  app.get('/api/products', (req, res) => {
    const filter = req.query.filter;
    productsRepository.getAll(filter).then(products => {
      res.send(products);
    });
  });

  app.post('/api/products', loggedIn, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    productsRepository.addProduct(req.body).then(result => res.json(result));
  });

  app.delete('/api/products', loggedIn, async (req, res) => {
    const result = await productsRepository.deleteProduct(req.query.id);
    console.log(result);
    return result;
  });

  app.put('/api/products', loggedIn, (req, res) => {
    productsRepository.updateProduct(req.body).then(result => {
      res.sendStatus(200);
    });
  });

  app.get('/api/dayTimeTypes', (req, res) => {
    foodsRepository.getAllDayTimeTypes().then(dayTimeTypes => {
      res.send(dayTimeTypes);
    });
  });

  app.get('/api/travelTypes', (req, res) => {
    foodsRepository.getAllTravelType().then(travelTypes => {
      res.send(travelTypes);
    });
  });

  app.get('/api/foods', (req, res) => {
    foodsRepository.getAll().then(foods => {
      res.send(foods);
    });
  });

  app.get('/api/recipes', (req, res) => {
    foodsRepository.getRecipes().then(recipes => {
      res.send(recipes);
    });
  });

  app.post('/api/foods', loggedIn, (req, res) => {
    if (!req.body) return res.sendStatus(400);
    foodsRepository
      .addFood(req.body)
      .then(() => {
        res.sendStatus(res.sendStatus(200));
      })
      .catch(err => res.sendStatus(500));
  });
};
