var express = require('express');
var path = require('path');
var app = express();
var router = express.Router();
var server = app.listen(3000);

app.use(express.static(path.join(__dirname, "public"))); 

