const path = require('path');
const webpack = require('webpack');

module.exports = {
  optimization: {
    minimize: false // Prevents minification
    ,moduleIds: 'named', // Keep module names readable
    chunkIds: 'named' // Keep chunk names readable
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
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