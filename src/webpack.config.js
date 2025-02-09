const path = require('path');

module.exports = {
  entry: {
    content: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'content.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};