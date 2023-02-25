// History 对象包含用户（在浏览器窗口中）访问过的 URL

// History 对象属性
(function(){
    console.log(history.length);
})();

// History 对象方法
export function meth(){
    history.back();     // 加载 history 列表中的前一个 URL
    history.forward();  // 加载 history 列表中的下一个 URL

    // go() 方法可加载历史列表中的某个具体的页面
    // history.go(number|URL)
    // -1上一个页面，1前进一个页面
    // 或一个字符串，字符串必须是局部或完整的URL，该函数会去匹配字符串的第一个URL
    history.go(-2);
};