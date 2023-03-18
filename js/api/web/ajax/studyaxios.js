import * as study from "./studyXMLHttpRequest.js"

// axios 发送 AJAX 请求
axios.defaults.baseURL = 'http://127.0.0.1/';

study.button.onclick = ()=>{
    axios.get('se').then(value => {
        console.log(value)
        study.result.innerHTML = value.data
    });
}

// 通用方法
function general(){
    axios({
        method: 'POST',
        url: 'server-axios',
        // 请求参数
        params: {
            a: 100,
            b: 200
        },
        // 请求头
        headers: {
            c: 300,
            d: 400
        },
        // 请求体
        data: {
            e: 500,
            f: 600
        },
        // 响应体类型
        dataType: 'json'
    }).then(response => {
        console.log(response.status); 
        console.log(response.statusText); 
        console.log(response.headers); 
        console.log(typeof response.data, response.data);
    });
}

