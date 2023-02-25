// Location 对象包含有关当前 URL 的信息
// 没有应用于Location对象的公开标准，不过所有浏览器都支持该对象

// Location 对象属性
(function(){
    console.log(location.hash);         // 返回一个URL的锚部分
    console.log(location.host);         // 返回一个URL的主机名和端口
    console.log(location.hostname);     // 返回URL的主机名
    console.log(location.href);         // 返回完整的URL
    console.log(location.port);         // 返回一个URL服务器使用的端口号
    console.log(location.protocol);     // 返回一个URL协议
    console.log(location.search);       // 返回一个URL的查询部分
})();

// Location 对象方法
export function meth(){
    // 载入一个新的文档
    location.assign("http://www.runoob.com");   

    // reload() 方法用于刷新当前文档
    // reload() 方法类似于你浏览器上的刷新页面按钮
    // 如果把该方法的参数设置为 true，
    // 那么无论文档的最后修改日期是什么，它都会绕过缓存，从服务器上重新下载该文档。
    // 这与用户在单击浏览器的刷新按钮时按住 Shift 健的效果是完全一样。
    location.reload(true)

    // 用新的文档替换当前文档
    location.replace("https://www.runoob.com")
};