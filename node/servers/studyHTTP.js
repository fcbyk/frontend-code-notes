const path = require('path')
const express = require('express');
const app = express();

// 使用 cors中间件 解决跨域问题
const cors = require('cors')
app.use(cors())

// for parsing application/json
app.use(express.json()) 

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })) 

// 读form-data里面的数据
// 引入文件上传模块express-fileupload
const fileUpload = require('express-fileupload');

// 配置文件上传模块
app.use(fileUpload());

function Result(code,data,msg){
    this.code = code
    this.data = data
    this.msg = msg
}

app.post('/body/json', (req, res) => {
    console.log(req.body)
    res.send(new Result(2001,req.body,"请求成功"));
});

app.post('/body/json/arr', (req, res) => {
    console.log(req.body)
    res.send(new Result(2002,req.body,"请求成功"));
});

app.post('/form-data', (req, res) => {
    console.log(req.body)
    console.log(req.files)
    let uploadPath = path.join(__dirname,"/../static/",req.files.img.name)
    console.log(uploadPath)

    // 使用mv方法来将上传文件保存到指定路径下
    // mv(filePath, callback)有两个参数：
    // filePath指定是上传文件的保存路径，
    // callback是回调函数用来处理判断是否上传成功并且有一个参数err表示错误对象
    req.files.img.mv(uploadPath, function (err) {
        if (err) console.log(err)
        req.body.imgUrl =  "http://127.0.0.1/static/"+req.files.img.name
        res.send(new Result(2001,req.body,"文件上传成功"))
    });
});

app.use('/static', express.static(__dirname + '../../static'))

app.listen(80, () => {
    console.log("HTTP学习服务器已启动");
});