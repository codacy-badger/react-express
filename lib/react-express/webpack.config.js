const Path = require('path');
const Webpack = {
  entry: './views/client.jsx',
  output: {
    path: Path.resolve(__dirname, 'public/javascripts'),
    filename: 'client.min.js'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};

module.exports = Webpack;