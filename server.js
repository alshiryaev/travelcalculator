const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');

const session = require("express-session");

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave:false
  })
);

require('./passport')(app);
require('./routes')(app);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});
app.listen(port, () => console.log(`Listening on port ${port}`));

