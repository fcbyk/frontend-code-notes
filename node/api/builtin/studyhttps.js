//导入模块
const fs = require('fs')            // 文件输入输出，用来导入证书        
const https = require('https')      // https服务器  
const express = require('express')  // express模块导入

//读取证书
const privateKey = fs.readFileSync('8574894_ali.fcbyk.com.key', 'utf8')
const certificate = fs.readFileSync('8574894_ali.fcbyk.com.pem', 'utf8')

// 创建 express 应用
const app = express()
// 监听 / 路径的 get 请求
app.get('/', function(req, res) {
  res.send('Hello Word!')
})

const httpsServer = https.createServer({ key: privateKey, cert: certificate }, app)
httpsServer.listen(443, function() {
  console.log('HTTPS Server is running')
})