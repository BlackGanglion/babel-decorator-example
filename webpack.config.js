var path = require('path');

module.exports = {
  entry: './input.js',
  output: {
    path: path.join(__dirname, '/'),
    filename: 'output.js'
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
