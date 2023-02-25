// String 对象用于处理文本（字符串）

// String 对象创建方法
(function(){
    let txt = new String("string");
    // 或者更简单方式：
    let txt1 = "string";
})();

// String 对象属性
(function(){
    // length 字符串的长度
    let str = '字符串';
    console.log(str.length);
})();

// String 对象方法
// Unicode 编码
(function(){
    // charCodeAt() 返回在指定的位置的字符的 Unicode 编码
    let str = 'abc';
    console.log(str.charCodeAt(0));
    console.log(str.charCodeAt(1));

    // fromCharCode() 将 Unicode 编码转为字符
    // 静态方法
    console.log(String.fromCharCode(65));
})();
