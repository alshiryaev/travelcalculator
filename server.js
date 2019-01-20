const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const { productsRepository } = require("./server/db/productsRepository");
const { foodsRepository } = require("./server/db/foodRepository");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

const user = {
  username: "admin",
  password: "12345"
};

app.use(cors());
app.use(bodyParser());
app.use(
  session({
    secret: "my-secret"
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
  done(err, user);
});

app.get("/api/products", (req, res) => {
  productsRepository.getAll().then(products => {
    res.send(products);
  });
});

passport.use(
  new LocalStrategy({ passReqToCallback: true }, function(req, username, password, done) {
    if (username === user.username && user.password === password) {      
      return done(null, user);
    }
    return done(null, false, { message: "Incorrect password." });
  })
);

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/admin",
    failureFlash: false
  })
);

app.post("/api/products", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  productsRepository.addProduct(req.body).then(result => res.json(result));
});

app.delete("/api/products", (req, res) => {
  productsRepository
    .deleteProduct(req.query.id)
    .then(() => res.sendStatus(200));
});

app.put("/api/products", (req, res) => {
  productsRepository.updateProduct(req.body).then(result => {
    res.sendStatus(200);
  });
});

app.get("/api/dayTimeTypes", (req, res) => {
  foodsRepository.getAllDayTimeTypes().then(dayTimeTypes => {
    res.send(dayTimeTypes);
  });
});

app.get("/api/travelTypes", (req, res) => {
  foodsRepository.getAllTravelType().then(travelTypes => {
    res.send(travelTypes);
  });
});

app.get("/api/foods", (req, res) => {
  foodsRepository.getAll().then(foods => {
    res.send(foods);
  });
});

app.get("/api/recipes", (req, res) => {
  foodsRepository.getRecipes().then(recipes => {
    res.send(recipes);
  });
});

app.post("/api/foods", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  foodsRepository
    .addFood(req.body)
    .then(() => {
      res.sendStatus(res.sendStatus(200));
    })
    .catch(err => res.sendStatus(500));
});

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
