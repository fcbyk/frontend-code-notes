// 导入 express
const express = require('express')
// 创建 web 服务器实例
const app = express()

// Express 路由
// 广义上来讲，路由就是映射关系
// 在 Express 中，路由指的是客户端的请求与服务器处理函数之间的映射关系。
// Express 中的路由分 3 部分组成，分别是请求的类型、请求的 URL 地址、处理函数
// 在 Express 中使用路由最简单的方式，就是把路由挂载到 app 上
// 为了方便对路由进行模块化的管理，Express 不建议将路由直接挂载到 app 上，而是推荐将路由抽离为单独的模块
// 这里学习，代码量少，则用函数代替一个js文件
function routerjs(){
  // 调用 express.Router() 创建路由对象
  let router = express.Router()

  // 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
  router.get('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
    res.send({ name: 'zs', age: 20, gender: '男' })
  })

  router.post('/user', (req, res) => {
    // 调用 express 提供的 res.send() 方法，向客户端响应一个文本字符串
    res.send('请求成功')
  })

  router.get('/', (req, res) => {
    // 通过 req.query 可以获取到客户端发送过来的 查询参数
    // 默认情况下，req.query 是一个空对象
    console.log(req.query)
    res.send(req.query)
  })

  // 这里的 :id 是一个动态的参数
  router.get('/user/:ids/:username', (req, res) => {
    // 通过 req.params对象，可以访问到 URL 中，通过 :匹配到的动态参数
    console.log(req.params)
    res.send(req.params)
  })

  return router;
}

// 注册路由模块
app.use(routerjs())
// 类似于托管静态资源，为静态资源统一挂载访问前缀一样，路由模块添加前缀的方式也非常简单
// app.use('/api',routerjs())

// 托管静态资源时
// 调用 express.static() 方法，快速的对外提供静态资源
// 通过如下代码就可以将 static 目录下文件对外开放访问
// 第一个为可选参数，路径前缀，可以通过带有 /static 前缀地址来访问 static 目录中的文件
// 例子：http://localhost/static/file.txt
app.use('/static', express.static(__dirname + '../../../static'))

// 启动 web 服务器
app.listen(80, () => {
  console.log('express server running at http://127.0.0.1')
})