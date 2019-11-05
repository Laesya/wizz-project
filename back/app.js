var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./routes/index');

var playerRouter = require('./routes/players');
var quizzRouter = require('./routes/quizz');
var questionRouter = require('./routes/question');
var promotionRouter = require('./routes/promotion');


var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/players', playerRouter);
app.use('/', indexRouter);
app.use('/quizzs', quizzRouter);
app.use('/questions', questionRouter);
app.use('/promotions', promotionRouter);


if (process.env.NODE_ENV == 'production') {
    app.use(express.static(path.join(__dirname, 'client')));
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, 'client', 'index.html'));
    });
    }


module.exports = app;