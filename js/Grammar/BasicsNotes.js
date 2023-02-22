//命名导出
export{
    hello, strict, notStrict, variate, 
    dataType, transition,operator,control
}

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

//运算符
//和其他语言差不太多
function operator(){

    //算术运算符
    //加减乘除，取余
    let a = 5,b = 3;
    console.log(a + b); //8
    console.log(a - b); //2
    console.log(a * b); //15
    console.log(a / b); //1.6666666666666667
    console.log(a % b); //2

    //赋值运算符
    //=、+=、-=、*=、/=、%=
    let url = 'zcoder.com';
    console.log(a += b); //等价于a=a+b    //8
    console.log(a -= b); //等价于a=a-b    //5
    console.log(a *= b); //等价于a=a*b    //15
    console.log(a /= b); //等价于a=a/b    //5
    console.log(a %= b); //等价于a=a%b    //2

    //一元运算符
    //++、--

    //前置操作
    let n = 1;
    ++n     //等价于n=n+1 
    console.log(n); //2
    --n     //等价于n=n-1 
    console.log(n); //1

    //后置操作
    n++     //等价于n=n+1 
    console.log(n); //2

    //前置操作与后置操作的区别
    //前置操作会在表达式最先执行，后置操作会在表达式最后执行
    let num = 2;
    let sum = 30 + ++num;
    console.log(sum);    //33

    num = 2;
    sum = 30 + num++;
    console.log(sum);    //32

    a = 1;
    b = a++ + 2;
    console.log(b);     //3

    //比较运算符
    // >、<、>=、<=
    // ==	强制类型转换比较
    // ===	不强制类型转换比较
    a = 1
    b = 2
    let c = '1'
    console.log(a < b); //true
    console.log(a == b); //false
    console.log(a == c); //true
    console.log(a === c); //false
    console.log(a == true); //true
    console.log(a === true); //false

    //逻辑运算符

    //逻辑与
    //使用 && 符号表示逻辑与，指符号两端都为 true 时表达式结果为 true
    a = true;
    b = true;
    if (a && b) {
        console.log('表达式成立');
    }

    //逻辑或
    //使用 || 符号表示逻辑或，指符号左右两端有一方为 true，表达式即成立
    a = true;
    b = false;
    if (a || b) {
        console.log('表达式成立');
    }

    //逻辑非
    //使用 ! 符号表示逻辑非，即原来是 true 转变为 false，反之亦然
    a = true;
    b = false;
    if (a && !b) {
        console.log('表达式成立');
    }
    
    //优先级
    //下列中因为 && 的优先级高所以结果是 true
    console.log(true || false && false);
    //可以使用 () 来提高优先级
    console.log((true || false) && false);

    //短路运算（逻辑中断）
    //js中，逻辑运算的返回值不是布尔值，而是返回变量的值
    //短路运算的原理：当有多个表达式（值）时,左边的表达式值可以确定结果时,就不再继续运算右边的表达式的值
    
    //逻辑与
    //语法：表达式1 && 表达式2
    //特点：一假为假，
    //所以表达式1为假，就直接返回表达式1。
    //如果表达式1为真，那么结果取决于表达式2，所以返回表达式2
    console.log(123 && 456); // 456
    console.log(0 && 456); //  0
    console.log(0 && 1 + 2 && 456 * 56789); // 0
    console.log('' && 1 + 2 && 456 * 56789); // ''

    //逻辑或
    //语法： 表达式1 || 表达式2
    //特点：一真为真
    //所以表达式1为真，就直接返回表达式1。
    //如果表达式1为假，那么结果取决于表达式2，所以返回表达式2
    console.log(123 || 456); // 123
    console.log(123 || 456 || 456 + 123); // 123
    console.log(0 || 456 || 456 + 123); // 456

    // 逻辑中断很重要 它会影响我们程序运行结果
    num = 0;
    console.log(123 || num++);  //123
    console.log(num); // 0

    //三元运算符
    //是针对 if 判断的简写形式
    n = true ? 1 : 2;
    console.log(n); //1

    let f = true ? (1 == true ? 'yes' : 'no') : 3;
    console.log(f); // yes

    //指数运算符(ES7)
    //在 ES7 中引入指数运算符 **，用来实现幂运算
    //功能与 Math.pow(a, b) 结果相同
    console.log(2 ** 10);	// 1024
    console.log(Math.pow(2, 10));

    //typeof运算符
    //typeof运算符的语法格式： typeof 变量名
    //typeof运算符的运算结果是以下6个字符串之一：注意字符串都是全部小写
    //undefined、 number、string、boolean、object、function
    n = 100
    let type = typeof n
    console.log(typeof type)
    console.log(type)

    //void运算符
    //格式：void(表达式)
    //什么都不返回，好像是返回undefined
    //常用于a标签
    //<a href="javascript:void(0)">单击此处什么也不会发生</a>
    n = 'str'
    n = void(1+1)
    console.log(n) //undefined
    console.log(typeof n) //undefined

    let empty = void(0)
    console.log(empty) //undefined
    console.log(typeof empty) //undefined
}

//控制语句
//和C++，Java差不多
function control(){

    //if分支语句
    if (true) {
        console.log('if分支语句');
        console.log('表达式成立');
    }

    //如果只有一条代码块，可以不用写 {}
    if (true) console.log('表达式成立');

    //else if 和 else 的使用
    let length = 1 ;
    let msg;
    if (length > 10) msg = "密码已经无敌了";
    else if (length > 6)  msg = "密码安全性中级";
    else msg = "这密码，要完的节奏";

    //switch分支语句
    //可以将 switch 理解为 if 的另一种结构清晰的写法。
    //如果表达式等于 case 中的值，将执行此 case 代码段
    //break 关键字会终止 switch 的执行
    //如果case执行后缺少 break 则接着执行后面的语句
    //没有任何 case匹配时将执行default 代码块
    let name = '视频';
    switch (name) {
        case '产品':
            console.log('hdcms.com');
            break;
        case '视频':
            console.log('houdunren.com');
            break;
        default:
            console.log('houdunwang.com')
    }

    //case 合用示例
    let error = 'warning';
    switch (error) {
        case 'notice':
        case 'warning':
            console.log('警告或提示信息');
            break;
        case 'error':
            console.log('错误信息');
    }

    //在switch 与 case 都可以使用表达式
    let age = 10
    switch (true) {
        case age < 15:
          console.log("儿童");
          break;
        case age < 25:
          console.log("青少年");
          break;
        case age < 40:
          console.log("青年");
          break;
        case age < 60:
          console.log("中年");
          break;
        case age < 100:
          console.log("老年");
          break;
        default:
          console.log("年龄输出错误");
    }

    //下面例子缺少 break 后，会接着执行后面的 switch 代码
    switch (1) {
        case 1:
            console.log(1);
        case 2:
            console.log(2);
        default:
            console.log("default");
    }

    //while循环语句
    //do/while，后条件判断语句，无论条件是否为真都会先进行循环体
    let i = 1;
    while(i<=10){
        console.log("我喜欢你");
        i++;
    }

    do{
        console.log("我爱你");
    }while(false)

    //for循环语句
    for(let i=1; i<=5; i++){
        console.log("我喜欢你");
    }

    //for 的三个参数可以都省略或取几个
    for(;;){
        console.log("我喜欢你");
        break;
    }

    //continue跳转语句
    //continue 用于退出当前循环返回循环起始继续执行

    //获取所有偶数，所有奇数使用 continue 跳过
    for (let i = 1; i <= 10; i++) {
        if (i % 2) continue;
        console.log(i);
    }

    //break跳转语句
    //break 用于退出当前循环

    //获取三个奇数，超过时使用break退出循环
    let count = 0,num = 3;
    for (let i = 1; i <= 10; i++) {
        if (i % 2) {
            console.log(i);
            if (++count == num) break;
        }
    }

    //label 标签
    //标签(label) 为程序定义位置，可以使用continue/break跳到该位置
    flag1:while(true){
        console.log("label 标签")
        flag2:while (true) {
            break flag1;
        }
    }

    //return跳转语句
    //跳出函数体，返回到主程序之中，不再往下执行函数体里面的语句
    if(false) return 0;
}


// 解构赋值（左边赋值给右边）
// 解构是一种更简洁的赋值特性
(function(){
    let info = {name:'解构赋值',url:'houdunren.com'}; 
    let {name:n,url:u} = info    // 注意右边才是声明的变量
    console.log(n); // 解雇赋值

    //如果属性名与变量相同可以省略属性定义
    let {name,url} = {name:'后盾人',url:'hao123.com'};
    console.log(name); // 后盾人
})();

// 函数返回值直接解构到变量
(function(){
    function hd() {
        return {
            name: '函数返回值',
            url: '123456'
        };
    }
    let {name: n,url: u} = hd();
    console.log(n);
})();

// 函数传参
(function(){
    function hd({ name: a, age: b}) {
        console.log(a, b); 
    }
    hd({ name: "向军", age: 18 });

    // 同名简写
    function hh({ name, age }) {
        console.log(name, age); 
    }
    hh({ name: "王五", age: 20 });
})();

// 系统函数解构练习，这没有什么意义只是加深解构印象
(function(){
    const {random: a} =Math;
    console.log(a());
    
    const {random} =Math;
    console.log(random());
})();

// 可以直接使用变量赋值对象属性
// 和上面不同，这次是又右往左赋值
(function(){
    let name = "后盾人",url = "houdunren.com";
    //标准写法如下
    let hd = { aa: name, bb: url };
    console.log(hd);

    //如果属性和值变量同名可以写成以下简写形式
    let opt = { name, url };
    console.log(opt);
})();

// 嵌套解构
(function(){
    const hd = {
        name:'后盾人',
        lessons:{
          title:'JS'
        }
    }
    const {name,lessons:{title}}  = hd;
    console.log(name,title);
})();

// 默认值
(function(){
    // 为变量设置默认值
    let {name,url,user='向军大叔'}= {name:'后盾人',url:'houdunren.com'};
    console.log(name,user);

    // 使用默认值特性可以方便的对参数预设
    function createElement(options) {
        let {
          width = '200px',
          height = '100px',
          backgroundColor = 'red'
        } = options;
      
        const h2 = document.createElement('h2');
        h2.style.width = width;
        h2.style.height = height;
        h2.style.backgroundColor = backgroundColor;
        document.body.appendChild(h2);
    }
    createElement({
        backgroundColor: 'green'
    });
})();

// 数组的解构赋值
(function(){
    function hd([a, b]) {
        console.log(a);
        console.log(b);
    }
    hd(['后盾人', '123']);

    // 设置默认值
    let [name, site = 'hdcms'] = ['后盾人'];
    console.log(site); 
})();