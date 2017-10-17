const webpack = require("webpack");
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path:__dirname + '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        { test: /\.css4/,loaders:['style-loader','css-loader']}
    ]
  }
};
