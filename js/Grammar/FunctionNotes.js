//在这里调用的函数会被导入的模块执行,即使没有全部导出
export{functionObject, getSum, getSumDef}

//issue 这里很模糊
//在 JS 中函数也是对象,可以用变量接收
//函数是Function构造函数创建的实例，下面的例子可以方便理解函数是对象
//迷惑：new对象后会立即执行一次
let functionObject = new Function("title='init'", "console.log(title)");
functionObject('在 JS 中函数也是对象');
console.log(typeof functionObject); //function

//函数的普通定义
function getSum(num1, num2) {
    console.log(num1 + num2);
}

//函数的参数
//js的形参和实参数量可以不对应
//形参数量大于实参时，没有传参的形参值为 undefined
//实参数量大于形参时，多于的实参将忽略并不会报错
getSum(1, 2);   //正常输出结果
getSum(1, 2, 3);    //正常输出结果
getSum(1); //未传值的形参为undefined，最终的结果就是 NaN

//默认参数(ES6)
//ES6 允许给函数参数设置默认值，当调用函数时不给实参，则使用参数默认值
//具有默认值的形参，一般要靠后
function getSumDef(num1, num2=10) {
    console.log(num1 + num2);
}

getSumDef(10);  //20
getSumDef(10,100);  //110

//函数的返回值
//函数没有 return ，返回的值是 undefined
let result = getSumDef(20);
console.log(result);

//匿名函数
//匿名函数即没有名字的函数
//函数是对象，所以可以通过赋值来指向到函数对象的指针
//当然指针也可以传递给其他变量
let anoFun01 = function(){
    console.log("这是一个匿名函数");
}

anoFun01();

let anoFun02 = function(){
    console.log("这是一个匿名函数");
}

anoFun01();
anoFun02();

//函数变量，空指针测试
//普通定义的getSumDef() 等价于 用变量getSumDef 接收一个匿名函数
anoFun01 = null;
getSumDef = null;
// 下面控制台报错
// anoFun01();
// getSumDef(10);

//箭头函数
//ES6 允许使用箭头=>定义函数
//箭头函数是函数声明的简写形式
//在使用递归调用、构造函数、事件处理器时不建议使用箭头函数

//用箭头函数写上面的 getSumDef() 函数
getSumDef = (num1, num2=10) =>{
    console.log(num1 + num2);
}
getSumDef(15);

//无参数时使用空扩号即可
let sum = () => {
	return 1 + 3;
}

//简写形式
//只有一条语句可以省略{}
//没有{}，需要省略return，系统会自动返回表达式计算结果
getSumDef = (num1, num2=20) => console.log(num1 + num2);
sum = () => 1 + 3;
getSumDef(20);
console.log(sum());

//只有一个参数时可以省略括号
let doubleNum = num => num*2;
console.log(doubleNum(222));

//立即执行函数
//格式(函数定义)(函数参数)
//立即执行函数指函数定义时立即执行
(function () {
    console.log("匿名立即执行函数01");
    //私有作用域
    //访问不了外面的函数
    // doubleNum(1000)
    //外面也不能访问里面的变量
    let ano = 100;
})();

let funO = (function funI() {
    console.log("普通立即执行函数");
    //可以返回数据让外面接收
    //doge[狗头],返回当前函数
    return funI;
})();

funO()