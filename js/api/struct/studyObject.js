// Object 是 JavaScript 的一种 数据类型 
// 它用于存储各种键值集合和更复杂的实体
// Objects 可以通过 Object() 构造函数或者使用 对象字面量 的方式创建

//在 JavaScript 中，几乎所有的对象都是 Object 类型的实例，它们都会从 Object.prototype 继承属性和方法

// 静态方法
(function(){
    // create() 使用指定的原型对象和属性创建一个新对象
    // 创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）
    const person = {
        isHuman: false,
        printIntroduction: function() {
          console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
        }
    };
    const me = Object.create(person);
    me.name = 'Matthew';
    me.isHuman = true;
    console.log(me);
})();