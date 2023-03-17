// fs 文件系统模块
// fs 模块是 Node.js 官方提供的、用来操作文件的模块
// 它提供了一系列的方法和属性，用来满足用户对文件的操作需求

// 导入 fs 模块，来操作文件
const fs = require('fs')

exports.fsread = function(){
  // 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
  // __dirname 表示当前文件所处的目录
  console.log(__dirname)

  // 调用 fs.readFile() 方法读取文件
  // 参数1：读取文件的存放路径
  // 参数2：读取文件时候采用的编码格式，一般默认指定 utf8
  // 参数3：回调函数，拿到读取失败和成功的结果  err  dataStr
  fs.readFile(__dirname+'../../../static/file.txt', 'utf8', function(err, dataStr) {
    // 打印失败的结果
    // 如果读取成功，则 err 的值为 null
    // 如果读取失败，则 err 的值为 错误对象，dataStr 的值为 undefined
    console.log(err)
    console.log('-------')
    // 打印成功的结果
    console.log(dataStr)
  })

  // 判断文件是否读取成功
  fs.readFile(__dirname+'../../../static/file.txt', 'utf8', function(err, dataStr) {
    if (err) {
      return console.log('读取文件失败！' + err.message)
    }
    console.log('读取文件成功！' + dataStr)
  })
}

exports.fswrite = function(){
  // 调用 fs.writeFile() 方法，写入文件的内容
  // 参数1：表示文件的存放路径
  // 参数2：表示要写入的内容
  // 参数3：回调函数
  fs.writeFile(__dirname+'../../../static/file.txt', '12345678', function(err) {
    // 如果文件写入成功，则 err 的值等于 null
    // 如果文件写入失败，则 err 的值等于一个 错误对象
    // console.log(err)
    if (err) {
      return console.log('文件写入失败！' + err.message)
    }
    console.log('文件写入成功！')
  })
}