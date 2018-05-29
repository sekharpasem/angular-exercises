// Startup Express App
 var express = require('express');
 var app = express();
 app.listen(process.env.PORT || 3000);
 // Configure Jade template engine
 var path = require('path');
 app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'jade');
 app.use(express.static(path.join(__dirname, 'public')));
 // handle HTTP GET request to the "/" URL
 app.get('/', function(req, res) {
 res.render('index');
 });