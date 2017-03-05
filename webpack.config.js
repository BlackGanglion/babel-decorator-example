var path = require('path');

module.exports = {
  entry: {
    redux: './src/redux',
    mobx: './src/mobx',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/build/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js|jsx$/, loaders: ['babel'] }
    ]
  }
}
