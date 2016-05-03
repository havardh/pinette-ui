/* eslint-disable no-var, vars-on-top */
require('babel-core/register');

var webpack = require('webpack');
var app = require('./server/index');
var config = require('./config');

app.listen(config.PORT, '0.0.0.0', err => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }

  console.log('Listening at http://0.0.0.0:3000'); // eslint-disable-line no-console
});
