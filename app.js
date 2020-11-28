const express = require("express");
const bodyParser = require("body-parser");
const login = require('./routes/loginroutes');

const app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// To serve cross-domain requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('view engine', 'ejs');

//routes to handle user registration
router.post('/register',login.register);
router.post('/login',login.login)
app.use('/api', router);

app.listen(3000, function() {
  console.log("Server Started at Port 3000");
})
