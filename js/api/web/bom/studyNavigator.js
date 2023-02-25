// Navigator 对象包含有关浏览器的信息
// 没有应用于 navigator 对象的公开标准，不过所有浏览器都支持该对象

// Navigator 对象属性
(function(){
    console.log(navigator.appName);     // 返回浏览器的名称
    console.log(navigator.appVersion);  // 返回浏览器的平台和版本信息
    console.log(navigator.platform);    // 返回运行浏览器的操作系统平台
    console.log(navigator.userAgent);   // 返回由客户机发送服务器的user-agent 头部的值
    console.log(navigator.onLine);      // 返回浏览器是否在线，在线返回 ture，否则返回 false
    console.log(navigator.product);     // 返回浏览器使用的引擎（产品）
    console.log(navigator.language);    // 返回浏览器使用的语言
    console.log(navigator.cookieEnabled);   // 返回指明浏览器中是否启用 cookie 的布尔值

    // 我们最常用的是 userAgent，该属性可以返回由客户机发送服务器的 user-agent 头部的值。
    // 可以判断用户那个终端打开页面，实现响应式跳转
})();