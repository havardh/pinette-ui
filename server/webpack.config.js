module.exports = {
  entry: './server.js',
  target: 'node',
  output: {
    filename: './build/server.js',
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: "json-loader" },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}