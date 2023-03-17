// http 模块是 Node.js 官方提供的、用来创建 web 服务器的模块。
// 通过 http 模块提供的 http.createServer() 方法，
// 就能方便的把一台普通的电脑，变成一台 Web 服务器，从而对外提供 Web 资源服务

// 导入 http 模块
const http = require('http')

// 创建 web 服务器实例
const server = http.createServer()

// 为服务器实例绑定 request 事件，监听客户端的请求
server.on('request', function (req, res) {
    console.log('Someone visit our web server.')

    // req 是请求对象，包含了与客户端相关的数据和属性
    // req.url 是客户端请求的 URL 地址
    const url = req.url
    // req.method 是客户端请求的 method 类型
    const method = req.method
    const str = `您请求的 URL 地址是 ${url}，请求的 method 类型为 ${method}`
    console.log(str)

    // 根据不同的url响应不同的html内容
    // 设置默认的响应内容为 404 Not found
    let content = '<h1>404 Not found!</h1>'
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }

    // res 为响应对象
    // 设置 Content-Type 响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    // 调用 res.end() 方法，向客户端响应一些内容
    res.end(content)

    // 如果需要托管静态资源,如index.html等
    // 则需要使用fs模块的readFile方法读取文件, 再使用响应对象返回浏览器
})

// 启动服务器
server.listen(8080, function () {  
  console.log('server running at http://127.0.0.1:8080')
})

