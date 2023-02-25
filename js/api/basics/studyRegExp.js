// RegExp：是正则表达式（regular expression）的简写

// 创建正则对象
(function(){
    // 两种方式
    // let patt =new RegExp(pattern,modifiers)
    // 或者更简单的方式
    // let patt =/pattern/modifiers

    // 当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）
    // 以下是等价的
    let re1 = new RegExp("\\w+");
    let re2 = /\w+/;

    console.dir(re1);
})();