export{person}

// JavaScript面向对象

// 传统对象 vs JavaScript对象

// 传统的面向对象
// 面向对象语言的一个标志就是类
// 类是所有对象的统称, 是更高意义上的一种抽象. 对象是类的实例
// 通过类我们可以创建任意多个具体的对象
// 在学习 C++/Java/Python 等编程语言的时候, 都可以按照这种方式去创建类和对象

// JavaScript 的面向对象
// JavaScript 中没有类的概念（ES6 之前），因此我们通常称为基于对象，而不是面向对象
// 虽然 JavaScript 中的基于对象也可以实现类似于类的封装、继承、甚至是多态。但是和传统意义的面向对象还是稍微有一些差异
// ECMA 中定义对象是这样: 无序属性的集合, 属性可以包含基本值, 对象或者函数
// 也就是对象是一组没有顺序的值组成的集合而已
// 对象的每个属性或者方法都有一个名字, 而名字对应一个值. 有没有觉得非常熟悉
// 没错, 其实就是我们经常看到和使用的映射(或者有些语言称为字典, 通常会使用哈希表来实现)

// 使用Object构造函数创建对象（创建对象方式1）
// 创建自定义对象最简单的方式就是创建一个 Object 实例, 然后添加属性和方法
// 1.创建person的对象
var person = new Object();

// 2.给person对象赋值了一些动态的属性和方法
person.name = '张三';
person.age = 22;
person.height = 175;

person.sayHello = function () {
    console.log('Hello, My name is ' + this.name);
};

// 3.使用点语法操作对象属性
person.sayHello();

// 使用对象字面量创建对象（创建对象方式2）
// 字面量形式在系统内部也是使用构造函数 new Object 创建的
var person = {
    // 注意这里不是写语句
    // 所以结束符不是分号和换行符
    // 这里写属性（键值对），每个属性使用逗号分隔
    name: '李四',
    age: 20,
    height: 180,

    sayHello: function () {
        console.log('My name is ' + this.name);
    },

    //因为不是写语句，属性名可以不遵循标识符的规则
    100:'一百',
    200:function(){
        console.log("200方法调用");
    },

    //函数属性（方法）的简写形式,可以省略function
    setName(name){
        this.name = name
    }
};

person.sayHello();
person.setName('王五');
console.log(person.name);

//如果属性名不是合法标识符，使用方扩号访问
console.log(person[100]);
person[200]();

// 工厂模式创建对象（创建对象方式3）
// 工厂模式是一种非常常见的设计模式, 这种模式抽象了创建具体对象的过程.
// 因为 JavaScript 中没法创建类, 开发人员就发明了一种函数, 用函数来封装以特定接口创建对象的细节
function createPerson(name, age, height) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.height = height;

    o.sayHello = function () {
        console.log('Hello, My name is ' + this.name);
    };
    return o;
}

// 创建两个对象
let person1 = createPerson('张三', 22, 188);
let person2 = createPerson('李四', 20, 203);
person1.sayHello(); 
person2.sayHello(); 

//另一种写法
function createStudent(n) {
    return {
        name:n,
        show() {
            console.log(this.name);
        }
    }
}

// 使用构造函数模式创建对象（创建对象方式4）
// 工厂模式虽然解决了创建多个相似对象的问题，但却没有解决对象识别的问题（即怎样知道一个对象的类型）
// 随着 JavaScript 的发展，又一个新模式出现了
// JavaScript 中的构造函数可用来创建特定类型的对象
function Person(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    this.sayHello = function () {
        console.log(this.name);
    };
    // 调用构造函数实际上会经历以下 4 个步骤：
    // 创建一个新对象, 这个新的对象类型其实就是 Person 类型
    // 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象，也就是 this 绑定）
    // 执行构造函数中的代码（为这个新对象添加属性和方法）
    // 返回新对象, 但是是默认返回的, 不需要使用 return 语句
}

// 使用构造函数创建对象
// 需要使用了 new 关键字
// 不使用new关键字，this 则指向上下文对象（顶级对象是window）
person1 = new Person('张三', 22, 188);
person2 = new Person('李四', 20, 203);
person1.sayHello();
person2.sayHello();

// 标识符命名规范
// 按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头
// 这个做法借鉴自其他面向对象语言，主要是为了区别于 ECMAScript 中的其他函数
// 因为构造函数本身也是函数，只不过可以用来创建对象而已

// 在控制台查看 constructor 属性
// 这两个对象都有一个 constructor（构造函数）属性，该属性指向 Person.
console.log(person1)
console.log(person2)
console.log(person1.constructor === Person); // true
console.log(person2.constructor === Person); // true

// 我们也可以通过 instanceof 来查看它的类型
// 我们会发现 person1 和 person2 既是 Person 类型, 也是 Object 类型
console.log(person1 instanceof Object); // true
console.log(person1 instanceof Person); // true
console.log(person2 instanceof Object); // true
console.log(person2 instanceof Person); // true

// 关于构造函数
// 我们知道, 构造函数也是一个函数, 只是使用的方式和别的函数不太一样(使用 new)
// 但是, 构造函数毕竟也是函数, 因此也可以像普通的函数一样去使用
// 而且, 其他任何的函数, 也可以通过 new 关键字来调用, 这个时候这个函数也可以被称为构造函数

// 把构造函数当做普通的函数去调用
// 模块化里的作用域的this为undefined
console.log(this); 
// 下面两行在模块化作用域报错
// Person('LBJ', 38, 2.03);  // window对象
// window.sayHello();

// 构造函数来创建对象的缺陷
// 构造函数模式虽然好用，但也并非没有缺点。
// 使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。
// 在前面的例子中，personl 和 person2 都有一个名为 sayName()的方法，但那两个方法不是同一个 Function 的实例。
// JavaScript 中的函数也是对象，因此每定义一个函数，也就是实例化了一个对象
function Persons(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    this.sayHello = new Function('console.log(this.name)');
}
// 从这个角度上来看构造函数，更容易明白每个 Person 实例都包含一个不同的 Function 实例.
// 但是, 有必要创建多个 Function 实例吗? 它们执行的代码完全相同.
// 你也许会考虑, 它们需要区分不同的对象, 不过, 在调用函数时, 我们传入的 this 就可以区分了. 没有必要创建出多个 Function 的实例.

// 我们可以验证一下这是两个不同的函数
console.log(person1.sayHello === person2.sayHello); // false