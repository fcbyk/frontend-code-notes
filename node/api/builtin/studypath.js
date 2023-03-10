// path 模块，用于操作路径
const path = require('path')
const fs = require('fs')

exports.pathjoin = function(){
    // join() 路径拼接
    // 注意：  ../ 会抵消前面的路径
    const pathStr = path.join('/a', '/b/c', '../../', './d', 'e')
    console.log(pathStr) // \a\d\e

    // 结合fs模块使用
    fs.readFile(path.join(__dirname, '/file1.txt'), 'utf8', function(err, dataStr) {
        if (err) {
          return console.log(err.message)
        }
        console.log(dataStr)
    })
}

exports.pathname = function(){
    // 定义文件的存放路径
    const fpath = '/a/b/c/index.html'

    // 带文件扩展名
    const fullName = path.basename(fpath)
    console.log(fullName)

    // 去除.html文件扩展名
    const nameWithoutExt = path.basename(fpath, '.html')
    console.log(nameWithoutExt)

    // 只保留文件扩展名
    const fext = path.extname(fpath)
    console.log(fext)
}
