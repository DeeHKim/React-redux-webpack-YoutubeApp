var path = require('path');
var webpack = require('webpack');
var srcPath = path.join(__dirname, 'src');

module.exports = {
    devtool: 'eval',
  entry: [
    './src/main.jsx',
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server'
  ],
  output: { path: __dirname, filename: 'bundle.js'},
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src'),
        // query: {
        //   presets: ['es2015', 'react']
        // }
      }, {
        test: /\.css?$/,
        loader: 'style!css?modules&localIdentName=[name]---[local]---[hash:base64:5]'
      }
    ]
  }
};
//   resolve: {
//     extension: [
//       "",
//       ".js",
//       ".jsx"
//     ]
//   }
// };
