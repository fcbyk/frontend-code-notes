// Math 对象用于执行数学任务
// Math 对象没有构造函数
// 所有的方法和属性都是静态的

// Math 对象属性
(function(){
    console.log(Math.E);    // 返回算术常量 e，即自然对数的底数（约等于2.718）
    console.log(Math.PI);   // 返回圆周率（约等于3.14159）
})();

// Math 对象的方法
(function(){
    console.log(Math.max(5,10,4));  // 返回 x,y,z,...,n 中的最大值
    console.log(Math.min(5,10,4));  // 返回 x,y,z,...,n 中的最小值
    console.log(Math.random());     // 返回 0 ~ 1 之间的随机数
    console.log(Math.abs(-100));    // 返回 x 的绝对值
})();