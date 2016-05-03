/* eslint-disable global-require */
const webpack = require('webpack');
const express = require('express');
const app = express();
const path = require('path');
const config = require('../config');

const generic = require('./src/generic');

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

app.all('*', (req, res, next) => {
  console.log(`${req.method}: ${req.url}`); // eslint-disable-line no-console
  next();
});

app.use(apiPath, generic);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

module.exports = app;
