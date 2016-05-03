/* eslint-disable */
let path = require('path');
let webpack = require('webpack');
let config = require('./config');

let entry;
if (config.BABEL_ENV === 'development') {
  entry = ['webpack-hot-middleware/client', './client/src/index.js']
} else {
  entry = ['./client/src/index.js']
}

module.exports = {
  devtool: 'source-map',
  entry: entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve('./', 'static'),
    devtoolLineToLine: true,
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        }
      },
      { test: /\.json$/, loaders: [ 'json-loader' ] },
      { test: /\.css$/, loaders: [ 'style', 'css' ] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
    ]
  }
};
