var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/api/users'); // update the import file path

var app = express();

app.use(logger('dev')); // log request components (URL/method) to terminal
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: false })); // parse urlencoded request body
app.use(cookieParser()); // parse cookies as an object on req.cookies
app.use(express.static(path.join(__dirname, 'public'))); // serve the static files in the public folder

// Attach Express routers
app.use('/', indexRouter);
app.use('/api/users', usersRouter); // update the path

module.exports = app;
