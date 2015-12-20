var WebpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');

var config = require('./webpack.config.js')

var server = new WebpackDevServer(webpack(config), {

  hot: true,
  inline: true,

  historyApiFallback: false,

  proxy: {"/api/*": "http://localhost:3003"},

});

server.listen(8080, "localhost", function () {});
