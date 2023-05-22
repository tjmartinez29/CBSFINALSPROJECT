require('ejs')
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const serverless = require('serverless-http');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var createRouter = require('../routes/create');
var viewRouter = require('../routes/view');
var editRouter = require('../routes/edit');
var deleteRouter = require('../routes/delete');
var registerRouter = require('../routes/register');
var loginRouter = require('../routes/login');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', createRouter);
app.use('/', viewRouter);
app.use('/', editRouter);
app.use('/', deleteRouter);
app.use('/', registerRouter);
app.use('/', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.get("/test", (req, res) => {
  res.json({
    name: "SUCCESS"
  })
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, function () {
  console.log('Node app is running on port 3000');
});


module.exports.handler = serverless(app);
