// 每个 JavaScript 函数实际上都是一个 Function 对象
console.log((function(){}).constructor === Function);  // true

// 构造函数Function()
// 创建一个新的 Function 对象。直接调用此构造函数可以动态创建函数
(function(){
    const sum = new Function('a', 'b', 'return a + b');
    console.log(sum(2, 6));
})();

// 实例属性
(function(){
    const sum = new Function('a', 'b', 'return a + b');
    console.dir(sum);
    console.log(sum.name);      // 函数的名称
    console.log(sum.length);    // 函数期望的参数数量
})();

// 原型方法
(function(){
    const sum = new Function('a', 'b', 'return a + b');

    // Function.prototype.toString() 方法
    // 返回表示函数源码的字符串
    // 覆盖了 Object.prototype.toString 方法。
    console.log(sum);

    // Function.prototype.call() 方法
    // 调用一个函数，并将其 this 值设置为提供的值。也可以选择传输新参数
    function Product(name, price) {
        this.name = name;
        this.price = price;
    }
    
    function Food(name, price) {
        Product.call(this, name, price);
        this.category = 'food';
    }
    
    console.log(new Food('cheese', 5).name);
})();