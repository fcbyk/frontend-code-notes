// BOM（Browser Object Model）即浏览器对象模型
// 它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window
// BOM缺乏标准，JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C，BOM最初是Netscape浏览器标准的一部分。

// Window 对象表示浏览器中打开的窗口
// window 对象是浏览器的顶级对象，它具有双重角色
// 它是 JS 访问浏览器窗口的一个接口
// 它是一个全局对象。定义在全局作用域中的变量、函数都会变成window对象的属性和方法
// 在调用的时候可以省略 window，如 alert()、prompt()等

// Window 对象属性
(function(){
    // window下的只读对象
    console.log(window.document);
    console.log(window.history);
    console.log(window.location);
    console.log(window.navigator);
    console.log(window.screen);

    // 存储对象
    console.log(window.localStorage);
    console.log(window.sessionStorage);

    // 返回窗口的文档显示区的高度和宽度
    console.log(window.innerHeight);
    console.log(window.innerWidth);

    // 返回窗口的外部高度和宽度，包含工具条与滚动条
    console.log(window.outerHeight);
    console.log(window.outerWidth);
})();

// Window 对象方法 - 对话框
export function dialog(){
    // prompt() 显示可提示用户输入的对话框
    // prompt(msg,defaultText)  两个都为可选参数
    // 这个方法返回用户输入的字符串
    let name = window.prompt("请输入你的名字","张三");

    // alert()	显示带有一段消息和一个确认按钮的警告框
    window.alert(name)

    // confirm() 显示带有一段消息以及确认按钮和取消按钮的对话框
    // 如果访问者点击"确定"，此方法返回true，否则返回false
    let r = confirm("按下按钮!");
    console.log(r);
};

// Window 对象方法 - 定时器
// window 对象给我们提供了 2 个非常好用的方法
// 定时器 setTimeout()、setInterval()
export function timeout(){
    // setTimeout() 在指定的毫秒数后调用函数或计算表达式
    // 1000 毫秒= 1 秒，5秒后执行箭头函数
    let a = window.setTimeout(()=>{
        alert("hello")
    },6000)

    // setInterval() 按照指定的周期（以毫秒计）来调用函数或计算表达式
    // 控制台每两秒输出一次没空气
    let b = window.setInterval(()=>{
        console.log("没空气")
    },1000)

    // 上面两个方法的返回值都是一个 ID（数字），
    // 可以将这个ID传递给clearInterval()，clearTimeout() 以取消执行
    window.setTimeout(()=>{
        window.clearTimeout(a);
        window.clearInterval(b);
        console.log("定时器已关闭");
    },5000)
}