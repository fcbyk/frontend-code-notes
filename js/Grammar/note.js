export{hello, strict, notStrict, variate,dataType}

//语句结束符,换行或分号
function hello(){
    let num  = 10;
    let str  = "HelloWorld"
    console.log(str)
}

//严格模式 use strict
function strict(){
    "use strict"
    //单独为函数设置严格模式
    //这里浏览器控制台报错，关键词不允许做变量使用
    // let public = 'app'
    return "严格模式"
}
function notStrict() {
    //不报错
    // let public = 'app'
    //模块自动处于严格模式,所以注释掉了
    return "正常模式"
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
    var web = "hdcms"
    console.log(typeof web) //string
    web = 99;
    console.log(typeof web) //number
    web = {};
    console.log(typeof web) //object

    //变量关键字 var let const
    //var 没有块作用域概念，很容易污染全局
    //let const 拥有块作用域
    //const 用来声明常量
    var a = 100
    let b = 100
    const c = 100
}

//数据类型与字面量
//JS可以通过 typeof 关键字检测数据类型
//基本数据类型（Number、String、Boolean、Undefined、Null ）
//引用类型（Object）
function dataType(){
    //字面量
    //括号里的都为字面量。
    //不同的数据类型，字面量的表示可能不同
    //如数组字面量使用了[ ]，字符串类型使用了引号，对象使用了{}
    console.log(18);//Number
    console.log('18');//String
    console.log(true);//Boolean
    console.log(undefined);//Undefined
    console.log(null);//Null

    //number类型
    //整数、小数、正数、负数、不是数字(NaN)、无穷大(Infinty) 都属于Number类型
    let score = 100; // 正整数
    let price = 12.345; // 小数
    let temperature = -40; // 负数
    console.log(typeof score); // 结果为 number
    console.log(typeof price); // 结果为 number
    console.log(typeof temperature); // 结果为 number

    //string类型
    //通过单引号（ '' ） 、双引号（ "" ）或反引号包裹的数据都叫字符串，
    //单引号和双引号没有本质上的区别，推荐使用单引号。
    //无论单引号或是双引号必须成对使用
    //单引号/双引号可以互相嵌套，但是不以自已嵌套自已
    //必要时可以使用转义符 \ ，输出单引号或双引号
    let user_name = '小明'; // 使用单引号
    let gender = "男"; // 使用双引号
    let age = '18'; // 看上去是数字，但是用引号包裹了就成了字符串了
    let str = ''; // 这种情况叫空字符串

    console.log(typeof user_name); // 结果为 string
    console.log(typeof gender); // 结果为 string
    console.log(typeof str); // 结果为 string

    //使用”+“运算符，进行字符串的拼接
    console.log('小明' + age + '岁');
    console.log('小明' + age + '岁');

    //模板字符串(ES6)
    //模板字符串（template string）是增强版的字符串，用反引号 ` 标识
    //字符串中可以出现换行符
    //可以使用 ${xxx} 形式输出变量
    let name = 'jack';
    console.log(`hello, ${name}`);

    let ul = `<ul>
                <li>apple</li>
                <li>banana</li>
                <li>peach</li>
            </ul>`;

    //boolean类型
    //表示肯定或否定时在计算机中对应的是布尔类型数据
    //有两个固定的值 true 和 false
    var flag = true; // flag 布尔型 
    var flag1 = false; // flag1 布尔型
    console.log(flag + 1); // true 参与加法运算当1来看
    console.log(flag1 + 1); // false 参与加法运算当 0来看

    //Undefined
    //变量声明了，但没有赋值，默认为undefined
    var a;
    console.log(a);

    //null
    //和C++，Java一样，空指针指向的内存是不可以访问的
    var obj = new Object();
    console.log(obj);
    obj = null;
    console.log(obj);

    //Object
    //引用类型，在堆区
    let arr = ['123',123,'hello'];
    console.log(typeof arr);
}

//数据类型的转换
//分隐式转化和显式转换，即自动转换和强制类型转换
function transition(){

    //转化为字符串
    //利用 + 拼接字符串的方法实现转换效果 隐式转换
    let num = 10
    console.log(typeof num)
    num=num+''
    console.log(typeof num)

    //使用 String 构造函数可以显式转换字符串类型
    let a = 99;
    console.log(typeof String(a));

    //使用类方法 toString 显式转化为字符串
    let b = 99;
    console.log(typeof hd.toString()); //string
    let arr = ['hdcms', 'hello'];
    console.log(typeof arr.toString()); //string

    //转换为数字型
    //使用乘法进行隐式类型转换
    console.log("66" * 1 + 5);  //71

    //使用 Number 函数基本上可以转换所有类型
    console.log(Number('houdunren')); //NaN
    console.log(Number(true));	//1
    console.log(Number(false));	//0
    console.log(Number('9'));	//9
    console.log(Number([]));	//0
    console.log(Number([5]));	//5
    console.log(Number([5, 2]));	//NaN
    console.log(Number({}));	//NaN

    //还有一些其他的对象方法可以转换，比如转化为浮点数
    // parseInt( )  提取字符串开始去除空白后的数字转为整数。
    console.log(parseInt('3.14')); // 3 取整
    console.log(parseInt('3.94')); // 3 取整，直接抛弃小数位
    console.log(parseInt('120px')); // 120 会去掉这个px单位
    console.log(parseInt('rem120px')); // NaN
    console.log(parseInt('  99houdunren'));	//99

    // parseFloat( ) 转换字符串为浮点数，忽略字符串前面空白字符。
    console.log(parseFloat('3.14')); // 3.14
    console.log(parseFloat('120px')); // 120 会去掉这个px单位
    console.log(parseFloat('rem120px')); // NaN

    //转换为布尔型
    //基本上所有类型都可以隐式转换为 Boolean 类型
    
    //如果使用 Boolean 与数值比较时
    //会进行隐式类型转换 true 转为 1，false 转为 0
    console.log(3 == true); //false
    console.log(0 == false); //true

    //字符串在与 Boolean 比较时，两边都为转换为数值类型后再进行比较
    console.log(Number("houdunren")); //NaN
    console.log(Boolean("houdunren")); //true
    console.log("houdunren" == true); //false
    console.log("1" == true); //true

    //数组与 Boolean 比较时
    //表现与字符串原理一样，会先转换为数值
    console.log(Number([])); //0
    console.log(Number([3])); //3
    console.log(Number([1, 2, 3])); //NaN
    console.log([] == false); //true
    console.log([1] == true); //true
    console.log([1, 2, 3] == true); //false

    //引用类型的 Boolean 值为真，如对象和数组
    if ([]) console.log("true");
    if ({}) console.log("true");

    //使用!!转换布尔类型
    let hd = '';
    console.log(!!hd); //false
    hd = 0;
    console.log(!!hd); //false
    hd = null;
    console.log(!!hd); //false
    hd = new Date("2020-2-22 10:33");
    console.log(!!hd); //true

    //使用 Boolean 函数显式转换为布尔类型
    console.log(Boolean('')); // false
    console.log(Boolean(0)); // false
    console.log(Boolean(NaN)); // false
    console.log(Boolean(null)); // false
    console.log(Boolean(undefined)); // false
}

