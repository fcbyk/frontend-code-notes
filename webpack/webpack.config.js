// 导入path模块
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {

  // 入口起点
  entry: './src/index.js',
  // 输出
  output: {
    // 输出文件名
    filename: 'main.js',
    // path模块的resolve方法用来拼接绝对路径
    path: path.resolve(__dirname, 'dist'),
  },

  // loader的配置
  module: {
    rules: [
        // 详细loader配置
        {
          // 匹配哪些文件
          test: /\.css$/,
          // 使用哪些loader进行处理,use数组的执行顺序是从右往左，从下到上
          use: [MiniCssExtractPlugin.loader,"css-loader"]
        },
        {
          // 配置less的loader
          test: /\.less$/,
          // less-loader能将less文件编译成css文件
          use: [MiniCssExtractPlugin.loader,"css-loader","less-loader"]
        }
    ]
  },

  // plugins的配置
  plugins: [
      // 详细plugins的配置
      // html-webpack-plugin插件：会自动创建一个空的html文件，并自动引入打包输出的所有资源(js/css)
      new HtmlWebpackPlugin({
        // 复制"./src/index.html"文件，并自动引入打包输出的所有资源(js/css)
        template: "./src/index.html"
      }),

      // 提取css成单独文件
      new MiniCssExtractPlugin({
        // 定义输出文件名和目录
        filename: "css/style.css",
      }),
      // css压缩
      new CssMinimizerPlugin()
  ],

  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "80", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
  },

  // 打包模式 development | production
  mode: "production"
  // mode: "development"
};
