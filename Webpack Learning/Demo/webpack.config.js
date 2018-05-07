const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    publicPath: "/dist/",
    path: path.resolve(__dirname, 'dist')
  },
  
  
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./public",
    port: 9000,
    historyApiFallback: true,
    inline: true,
    hotOnly: true
  },
  module: {
      rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "env", "react"
                      ]
                  }
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: [
                  {
                      loader: "style-loader"
                  }, {
                      loader: "css-loader"
                  }
              ]
          }
      ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hot Module Replacement'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.BannerPlugin('Under MIT !!!')
  ]
};