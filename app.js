'use strict';

var express  = require('express'),
    app      = express(),
    mongoose = require('mongoose'),
    config   = require('./config');

// connect to the database based on config.js
mongoose.connect(config.db[app.settings.env]);

app.get('/', function (req, res){
  res.send('hello world');
});

var artists = require('./routes/artists'); // this is a router instance
app.use('/artists', artists); // base route = /artists

module.exports = app;