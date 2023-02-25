// Screen 对象包含有关客户端显示屏幕的信息
// 没有应用于 screen 对象的公开标准，不过所有浏览器都支持该对象

// Screen 对象属性
// 这里的属性看的不明不白
(function(){
    console.log(screen.availHeight);// 返回屏幕的高度（不包括Windows任务栏）
    console.log(screen.availWidth); // 返回屏幕的宽度（不包括Windows任务栏）
    console.log(screen.height);     // 返回屏幕的总高度
    console.log(screen.width);      // 返回屏幕的总宽度
    console.log(screen.colorDepth); // 返回目标设备或缓冲器上的调色板的比特深度
    console.log(screen.pixelDepth); // 返回屏幕的颜色分辨率（每象素的位数）
})();