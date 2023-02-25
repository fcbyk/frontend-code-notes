// Number 对象是原始数值的包装对象

// Number 创建方式
(function(){
    let num = new Number('s');
    // 如果一个参数值不能转换为一个数字将返回 NaN (非数字值)
    console.log(num);
})();

// Number 对象静态属性
(function(){
    // MAX_VALUE  可表示的最大的数
    // MIN_VALUE  可表示的最小的数
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);

    // NEGATIVE_INFINITY	负无穷大，溢出时返回该值
    // POSITIVE_INFINITY	正无穷大，溢出时返回该值
    console.log(Number.NEGATIVE_INFINITY);
    console.log(Number.POSITIVE_INFINITY);

    // NaN 属性是代表非数字值的特殊值。该属性用于指示某个值不是数字
    console.log(Number.NaN);
})();

// Number 对象方法
(function(){
    // isInteger()	检测指定参数是否为整数
    console.log(Number.isInteger(0));
    console.log(Number.isInteger(0.1));
})();