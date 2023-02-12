//语句结束符,换行或分号
function fun01(){
    let num  = 10;
    let str  = "Hello"
}

//严格模式 use strict
function strict(){
    "use strict";
    //单独为函数设置严格模式
    //这里浏览器控制台报错，关键词不允许做变量使用
    let public = 'app';
    return "严格模式";
}
function notStrict() {
    //不报错
    let public = 'app';
    return "正常模式";
}

//标识符
//JS的标识符由字母、数字、$、_ 组成

//变量与常量
//JS 中的变量是弱类型，可以保存所有类型的数据，即变量没有类型而值有类型
function variate(){
    // 变量的声明
    // 语法：let(关键字) 变量名
    // 注意不用写数据类型
    let age
    let n ,f 	//可以同时声明多个变量
    var a 		//不同的关键字定义变量

    //变量的赋值
    //使用赋值运算符进行赋值
    let str 
    str = 'hello world!' 
    let str1 = 'hello world!'	//声明和赋值同时进行
    let a1 = 2,a2 = 3

    //弱类型
    //在 JS 中变量类型由所引用的值决定
    var web = "hdcms";
    console.log(typeof web); //string
    web = 99;
    console.log(typeof web); //number
    web = {};
    console.log(typeof web); //object
}
