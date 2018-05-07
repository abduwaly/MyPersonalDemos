const path = require('path');

module.exports = {
  entry: './src/index.js', //入口文件
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};