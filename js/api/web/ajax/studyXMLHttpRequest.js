// AJAX全称为Asynchronous JavaScript And XML，就是异步的 JS 和 XML
// 通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势：无刷新获取数据 

document.body.innerHTML = `<style>
#result {
    width: 200px;
    height: 100px;
    border: 1px solid #90b;
}
</style>
<button>点击发送请求</button>
<div id="result"></div>`

// 获取展示结果的div元素
export const result = document.getElementById('result');
// 按钮绑定事件
export const button = document.getElementsByTagName('button')[0];
button.onclick = function () {
    // 创建XMLHttpRequest实例对象
    const xhr = new XMLHttpRequest();
    // 初始化
    xhr.open('GET', 'http://127.0.0.1/server');
    // 发送
    xhr.send();
    // 事件绑定，处理服务器端返回的结果
    xhr.onreadystatechange = function () {
        // 服务端返回所有结果
        if (this.readyState === 4) {
            // 2xx 成功
            if (this.status >= 200 && this.status < 300) {
                // 状态码、状态字符串
                console.log(this.status); // 200
                console.log(this.statusText); // OK
                // 响应头
                console.log(this.getAllResponseHeaders()); // content-length: 13  content-type: text/html; charset=utf-8
                // 响应体
                console.log(this.response); // Hello Express
                // 将响应体内容设置为文本
                result.innerHTML = this.response;
            }
        }
    };
}