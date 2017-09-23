var express = require('express');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.static('client'));

// app.get('/', function(req, res) {
//   res.send(process.cwd());
// });

module.exports = app;