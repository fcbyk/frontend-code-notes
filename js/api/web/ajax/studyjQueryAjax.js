import * as study from "./studyXMLHttpRequest.js"

// jQuery 发送 AJAX 请求
// $.get(url,[data],[callback],[type])
// $.post(url,[data],[callback],[type])
// 参数说明
// url：请求的 URL 地址
// data：请求携带的参数
// callback：载入成功时回调函数
// type：设置返回内容格式，xml，html，script，ison，text，_default

study.button.onclick = () => {
    $.get('http://127.0.0.1/se', data => study.result.innerHTML = data);
};

// 通用方法
$.ajax({
    // 请求地址
    url: 'http://127.0.0.1/server-jquery',
    // 请求参数
    data: { a: 100, b: 200 },
    // 请求类型
    type: 'GET',
    // 响应体类型
    dataType: 'json',
    // 成功回调
    success: data => {
        console.log(typeof data, data); 
    },
    // 超时时间
    timeout: 1000,
    // 失败的回调
    error: () => {
        console.log('http://127.0.0.1/server-jquery，网络请求出错了')
    },
    // 头信息
    headers: {
        c: 300,
        d: 400
    }
});