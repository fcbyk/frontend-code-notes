const express = require('express');
const app = express();

// 使用 cors中间件 解决跨域问题
const cors = require('cors')
app.use(cors())
// 全局中间件
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    next()
})

app.get('/server', (request, response) => {
    response.send('Hello Express');
});

app.get('/se', (request, response) => {
    response.send('Hello');
});

app.listen(80, () => {
    console.log("Ajax学习服务器已启动");
});