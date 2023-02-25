// JavaScript 全局属性和方法可用于创建Javascript对象

// JavaScript 全局属性
// Infinity	代表正的无穷大的数值
// NaN	指示某个值是不是数字值
// undefined	指示未定义的值
let a = Infinity;
console.log(a);
a = NaN;
console.log(a);
a = undefined;
console.log(a);

// eval() 函数
// 计算 JavaScript 字符串，并把它作为脚本代码来执行
// 语法: eval(string)

// 如果参数是一个表达式，eval() 函数将执行表达式
let b = eval("1+1");
console.log(b);

// 如果参数是Javascript语句，eval()将执行 Javascript 语句
eval("a = 100;console.log(a)");
eval(console.log(a));   // 不加引号也会自动调用toString方法转成字符串