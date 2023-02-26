// 在 HTML DOM (Document Object Model) 中 , 每一个元素都是 节点:
// 文档是一个文档节点。
// 所有的HTML元素都是元素节点。
// 所有 HTML 属性都是属性节点。
// 文本插入到 HTML 元素是文本节点。are text nodes。
// 注释是注释节点。

// 当浏览器载入 HTML 文档, 它就会成为 Document 对象。
// Document 对象是 HTML 文档的根节点。
// Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。

// 查看document对象的原型链
// #document -> HTMLDocument -> Document -> Node -> EventTarget -> Object
(function(){
    let a = document
    while(a!=null){
        console.dir(a)
        a = a.__proto__   
    }
})();

// document对象属性
(function(){
    console.log(document.title);    // 当前文档的标题
    console.log(document.URL);      // 文档完整的URL
    console.log(document.readyState);   // 当前文档状态 (载入中……)
    console.log(document.lastModified); // 文档被最后修改的日期和时间

    console.log(document.documentElement);  // 文档根元素对象，即<html>元素对象
    console.log(document.body);             // 文档body元素对象
})();

// document对象方法 - 往HTML文档写入内容
// write()，向文档写 HTML 表达式 或 JavaScript 代码
// writeln()，等同于 write() 方法，不同的是在每个表达式之后写一个换行符
// open() 方法打开一个输出流来收集 document.write() 或 document.writeln() 方法输出的内容。
// 调用 open() 方法打开一个新文档并且用 write() 方法设置文档内容后，
// 必须记住用 document.close() 方法关闭文档，并迫使其内容显示出来
// 当文档流执行完毕，会导致页面全部重绘原来就没有了
export function writeHTML(){
    let a = document.open()
    a.write("123")
    a.writeln("456")
    a.writeln(789)
    a.close()
};

// document对象方法 - 获取元素对象
(function(){
    // 返回对拥有指定 id 的第一个对象的引用
    document.getElementById("www")

    // 返回文档中匹配指定 CSS 选择器的一个元素的引用
    document.querySelector("#demo");
})();