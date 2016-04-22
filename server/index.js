"use strict";

var webpack = require('webpack');
var express = require('express');
var app = express();
var exec = require('child_process').exec;
var path = require('path');
var config = require('../config');

var generic = require('./src/generic');

const apiPath = '/api';

if (config.BABEL_ENV === 'development') {
  const webpackConfig = require('../webpack.config.js');
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
  app.use(require('webpack-hot-middleware')(compiler));
}

app.all("*", function(req, res, next) {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.use(apiPath, generic);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
