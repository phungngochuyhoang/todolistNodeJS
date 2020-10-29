var express = require('express');
var controller = require('./controllers/controllerTodo');

var app = express();

// set view 
app.set('view engine', 'ejs');

// set middleware static for web
app.use(express.static('./public'));

// controller
controller(app);

// listen port
app.listen(2424);
console.log("server running with port 2424");
