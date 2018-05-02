module.exports = {
  entry:  __dirname + "/src/main.js",//入口文件
  mode: "development",
  output: {
    path: __dirname + "/public",//打包后的文件存放目录
    filename: "bundle.js"//打包后输出文件的文件名
  }
}