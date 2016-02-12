module.exports = {
  entry: './app.js',
  output: {
    filename: './build/bundle.js',
    path: require("path").resolve('./'),
    devtoolLineToLine: true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      { test: /\.css$/, loaders: [ 'style', 'css' ] },
      { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
      { test: /\.scss$/, loaders: [ 'style', 'css', 'sass' ] },
    ]
  }
};
