// Boolean 对象用于转换一个不是 Boolean 类型的值转换为 Boolean 类型值 (true 或者false)

(function(){
    let b = new Boolean(0);
    console.log(b);
    console.log(b.toString());    // 重写了 toString() 方法

    // valueOf() 返回 Boolean 对象的原始值
    console.log(b.valueOf()); 
})(); 