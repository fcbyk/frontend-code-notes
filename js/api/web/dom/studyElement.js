// Element 是一个通用性非常强的基类，所有 Document 对象下的对象都继承自它。
// 这个接口描述了所有相同种类的元素所普遍具有的方法和属性。
// 一些接口继承自 Element 并且增加了一些额外功能的接口描述了具体的行为。例如， HTMLElement 接口是所有 HTML 元素的基本接口，而 SVGElement 接口是所有 SVG 元素的基础。

// 查看html元素对象的原型链
(function(){
    let prot = (a)=>{
        while(a!=null){
            console.dir(a)
            a = a.__proto__   
        }
        console.log("----- end -----");
    };
    prot(document.body);
    prot(document.documentElement);
    document.body.innerHTML = "<h1 id='hhh'>标题1</h1>"
    prot(document.getElementById("hhh"))

    // 观察上面三条原型链
    // body -> HTMLBodyElement -> HTMLElement -> Element -> Node -> EventTarget -> Object
    // html -> HTMLHtmlElement -> HTMLElement -> Element -> Node -> EventTarget -> Object
    // h1#hhh -> HTMLHeadingElement -> HTMLElement -> Element -> Node -> EventTarget -> Object
})();