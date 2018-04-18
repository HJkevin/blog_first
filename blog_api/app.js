var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
<<<<<<< HEAD
//var bodyParser=require("body-parser")

=======
var bodyParser = require("body-parser")
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
<<<<<<< HEAD
<<<<<<< HEAD
app.use(bodyParser());
=======
//app.use(bodyParser());
>>>>>>> abf50b7d1292dfeb41f1777aa17deccbb44bd1b2
=======
app.use(bodyParser());
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a

app.use(express.static(path.join(__dirname, 'public')));


// 页面渲染
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 接口
<<<<<<< HEAD


var apiBackUser=require("./api/back/user.js")
app.use('/api/back/user', apiBackUser);
var apiBackClass=require("./api/back/class.js")
app.use('/api/back/class', apiBackClass);



=======
var apiUser = require("./api/back/user.js")
app.use('/api/back/user', apiUser);
>>>>>>> ee0599be9563a84014d0472a8ad05da536f96e7a

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
