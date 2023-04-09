// 导入path模块
const path = require('path');

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
          use: [
              "style-loader",
              "css-loader"
          ]
        },
        {
          // 配置less的loader
          test: /\.less$/,
          use: [
              "style-loader",
              "css-loader",
              // less-loader能将less文件编译成css文件
              "less-loader"
          ]
        }
    ]
  },

  // plugins的配置
  plugins: [
      // 详细plugins的配置
  ],

  // 打包模式 development | production
  mode: "production"
};
