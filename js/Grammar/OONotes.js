// export{}
// 注释了在mian.js也能导入, 并执行

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
// 1.创建person1的对象
let person1 = new Object();

// 2.给person1对象赋值了一些动态的属性和方法
person1.name = '张三';
person1.age = 22;
person1.height = 175;

person1.sayHello = function () {
    console.log('Hello, My name is ' + this.name);
};

// 3.使用点语法操作对象属性
person1.sayHello();


// 使用对象字面量创建对象（创建对象方式2）
// 字面量形式在系统内部也是使用构造函数 new Object 创建的
let person2 = {
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

person2.sayHello();
person2.setName('王五');
console.log(person2.name);

//如果属性名不是合法标识符，使用方扩号访问
console.log(person2[100]);
person2[200]();


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
let person3 = createPerson('张三', 22, 188);
let person4 = createPerson('李四', 20, 203);
person3.sayHello(); 
person4.sayHello(); 

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
function PersonA(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    this.sayHello = function () {
        console.log(this.name);
    };
    // 调用构造函数实际上会经历以下 4 个步骤：
    // 创建一个新对象, 这个新的对象类型其实就是 PersonA类型
    // 将构造函数的作用域赋给新对象（因此 this 就指向了这个新对象，也就是 this 绑定）
    // 执行构造函数中的代码（为这个新对象添加属性和方法）
    // 返回新对象, 但是是默认返回的, 不需要使用 return 语句
}

// 使用构造函数创建对象
// 需要使用了 new 关键字
// 不使用new关键字，this 则指向上下文对象（顶级对象是window）
let person5 = new PersonA('张三', 22, 188);
let person6 = new PersonA('李四', 20, 203);
person5.sayHello();
person6.sayHello();

// 标识符命名规范
// 按照惯例，构造函数始终都应该以一个大写字母开头，而非构造函数则应该以一个小写字母开头
// 这个做法借鉴自其他面向对象语言，主要是为了区别于 ECMAScript 中的其他函数
// 因为构造函数本身也是函数，只不过可以用来创建对象而已

// 在控制台查看 constructor 属性
// 这两个对象都有一个 constructor（构造函数）属性，该属性指向 PersonA.
console.log(person5)
console.log(person6)
console.log(person5.constructor === PersonA); // true
console.log(person6.constructor === PersonA); // true

// 我们也可以通过 instanceof 来查看它的类型
// 我们会发现 person5 和 person6 既是 PersonA 类型, 也是 Object 类型
console.log(person5 instanceof Object); // true
console.log(person5 instanceof PersonA); // true
console.log(person6 instanceof Object); // true
console.log(person6 instanceof PersonA); // true

// 关于构造函数
// 我们知道, 构造函数也是一个函数, 只是使用的方式和别的函数不太一样(使用 new)
// 但是, 构造函数毕竟也是函数, 因此也可以像普通的函数一样去使用
// 而且, 其他任何的函数, 也可以通过 new 关键字来调用, 这个时候这个函数也可以被称为构造函数

// 把构造函数当做普通的函数去调用
// 模块化里的作用域的this为undefined
console.log(this); 
// 下面两行在模块化作用域报错
// PersonA('byk', 38, 2.03);  // window对象
// window.sayHello();

// 构造函数来创建对象的缺陷
// 构造函数模式虽然好用，但也并非没有缺点。
// 使用构造函数的主要问题，就是每个方法都要在每个实例上重新创建一遍。
// 在前面的例子中，person5 和 person6 都有一个名为 sayName()的方法，但那两个方法不是同一个 Function 的实例。
// JavaScript 中的函数也是对象，因此每定义一个函数，也就是实例化了一个对象
function PersonB(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;

    this.sayHello = new Function('console.log(this.name)');
}
// 从这个角度上来看构造函数，更容易明白每个 Person 实例都包含一个不同的 Function 实例.
// 但是, 有必要创建多个 Function 实例吗? 它们执行的代码完全相同.
// 你也许会考虑, 它们需要区分不同的对象, 不过, 在调用函数时, 我们传入的 this 就可以区分了. 没有必要创建出多个 Function 的实例.

// 我们可以验证一下这是两个不同的函数
console.log(person5.sayHello === person6.sayHello); // false


// 原型对象 
// 什么是原型呢
// 我们创建的每个函数都有一个 prototype（原型）属性
// 这个属性是一个指针，指向一个对象
// 而这个对象的作用是存放这个类型创建的所有实例共享的属性和方法
// 指向的这个对象, 就是我们的所谓的原型对象
// 使用原型对象的好处是可以让所有对象实例共享它所包含的属性和方法。
// 换句话说，不必在构造函数中定义对象实例的信息，而是可以将这些信息直接添加到原型对象中

// 创建对象的构造函数
function PersonC() {}

// 通过原型对象来设置一些属性和值
PersonC.prototype.name = '原型对象';
PersonC.prototype.age = 18;
PersonC.prototype.height = 1.88;
PersonC.prototype.sayHello = function () {
    console.log(this.name);
};

// 创建两个对象, 并且调用方法
let person7 = new PersonC();
let person8 = new PersonC();

person7.sayHello(); // 原型对象
person8.sayHello(); // 原型对象

// 代码解析
// 在上面的代码中, 我们没有给实例对象单独设置属性和方法, 而是直接设置给了原型对象
// 而原型对象的作用是可以让所有的对象来共享这些属性和方法
// 因此, 我们调用 sayHello()方法时, 它们打印的结果是一样的, 它们是共享的

// 默认情况下，所有原型对象都会自动获得一个 constructor（构造函数）属性
// constructor 属性指向构造函数
// 用我们上面的例子来说 Personx.prototype.constructor 指向 PersonC
// 也就是原型对象自身来说, 只有一个 constructor 属性, 而其他属性可以由我们添加或者从 Object 中继承

// proto属性
// 当调用构造函数创建一个新实例后，该实例的内部将包含一个内部属性，该属性的指针, 指向构造函数的原型对象
// 简单说, 每个实例中, 其实也会有一个属性, 该属性是指向原型对象的

// 原型对象中有一个属性: constructor属性
// 属性指向PersonC函数
console.log(PersonC.prototype.constructor); // PersonC函数

// 对象实例也有一个属性指向原型
console.log(person7.__proto__);     // 原型对象(也称显式原型)
console.log(PersonC.prototype);     // 原型对象(也称隐式原型)
console.log(person7.__proto__ === PersonC.prototype); // true

// 对象搜索属性和方法的过程
// 每当代码读取某个对象的某个属性时，都会执行一次搜索，也就是要找到给定名称的属性
// 搜索首先从 对象实例本身 开始
// 如果在实例中找到了具有给定名字的属性，则返回该属性的值
// 如果没有找到，则继续搜索指针指向的原型对象，在原型对象中查找具有给定名字的属性
// 也就是说，在我们调用 person3.sayHello()的时候，会先后执行两次搜索
// 现在我们也能理解, 为什么所有的实例中都包含一个 constructor 属性, 这是因为默认所有的原型对象中都包含了该属性

// 可以通过proto来修改原型的值(通常不会这样修改, 知道即可)
person7.__proto__.name = '预言家';

person7.sayHello(); // 预言家
person8.sayHello(); // 预言家

// 但是要注意下面的情况
// 当我们给 person7.name 进行赋值时, 其实在给 person7 实例添加一个 name 属性
// 这个时候再次访问时, 就不会访问原型中的 name 属性了

// 给person7实例添加属性
person7.name = '不是预压家';
person7.sayHello(); // 不是预压家
person8.sayHello(); // 预言家, 来自原型

// 判断属性属于谁
console.log(person7.hasOwnProperty('name')); // true
console.log(person8.hasOwnProperty('name')); // false

// 简洁的原型语法
// 如果按照前面的做法, 每添加一个原型属性和方法, 都要敲一遍 Person.prototype.
// 为了减少不必要的输入, 另外也为了更好的封装性, 更常用的做法是用一个包含所有属性和方法的对象字面量来重写整个原型对象
// 定义Persona构造函数
function PersonD() {}

// 重写Persona的原型属性
PersonD.prototype = {
    name: '小明',
    age: 18,
    height: 188,

    sayHello: function () {
        alert(this.name);
    },
};

// 我们将 PersonD.prototype 赋值了一个新的对象字面量, 最终结果和原来是一样的
// 但是 constructor 属性默认不再指向 PersonD 了
// 前面我们说过, 每创建一个函数, 就会同时创建它的 prototype 对象, 这个对象也会自动获取 constructor 属性
// 而我们这里相当于给 prototype 重新赋值了一个对象, 那么这个新对象的 constructor 属性, 会指向 Object 构造函数, 而不是 PersonD 构造函数了

// 创建PersonD对象
var person9 = new PersonD();

console.log(person9.constructor === Object); // true
console.log(person9.constructor === PersonD); // false

console.log(person9 instanceof PersonD); // true

// 如果在某些情况下, 我们确实需要用到 constructor 的值, 可以手动的给 constructor 赋值即可
function PersonE() {}

// 重写Person的原型属性
PersonE.prototype = {
    constructor: PersonE,
    name: '小明',
    age: 18,
    height: 188,

    sayHello: function () {
        alert(this.name);
    },
}

// 创建PersonE对象
let person10 = new PersonE();

console.log(person10.constructor === Object); // false
console.log(person10.constructor === PersonE); // true

console.log(person10 instanceof PersonE); // true

// 上面的方式虽然可以, 但是也会造成 constructor 的[[Enumerable]]特性被设置了 true.
// 默认情况下, 原生的 constructor 属性是不可枚举的.
// 如果希望解决这个问题, 使用Object.defineProperty()函数

// 定义Person构造函数
function PersonF() {}

// 重写Person的原型属性
PersonF.prototype = {
    name: '小明',
    age: 18,
    height: 188,

    sayHello: function () {
        alert(this.name);
    },
};

Object.defineProperty(PersonF.prototype, 'constructor', {
    enumerable: false,
    value: PersonF,
});

// 重写整个原型对象要注意的问题

// 定义Person构造函数
function PersonG() {}

// 创建Person的对象
let person11 = new PersonG();

// 给Person的原型添加方法
PersonG.prototype = {
    constructor: PersonG,
    sayHello: function () {
        console.log('Hello JavaScript');
    },
};

let person12 = new PersonG();

// 调用方法
// person11.sayHello();
person12.sayHello();

// 上面代码是不能正常运行的. 因为 PersonA 的 prototype 指向了一个新的对象
// 而最初我们创建的 person11 依然指向原来的原型对象, 原来的原型对象没有 sayHello()函数
// 当然, 如果再次之后, 再创建的 Person12 对象, 是可以调用 sayHello()的, 但是再次之前创建的, 没有该方法


// 原型对象存在的问题

// 定义Person构造函数
function PersonH() {}

// 设置Person原型
PersonH.prototype = {
    constructor: PersonH,
    name: '小明',
    age: 18,
    height: 188,
    hobby: ['Basketball', 'Football'],

    sayHello: function () {
        console.log('Hello JavaScript');
    },
};

// 创建两个person对象
let person13 = new PersonH();
let person14 = new PersonH();

console.log(person13.hobby); // Basketball,Football
console.log(person14.hobby); // Basketball,Football

person13.hobby.push('tennis');  // 引用类型不会像基础类型那样在实例创建新的属性,而是访问和修改原型上的属性

console.log(person13.hobby); // Basketball,Football,tennis
console.log(person14.hobby); // Basketball,Football,tennis

// OK, 我们会发现, 我们明明给 person13 添加了一个爱好, 但是 person14 也被添加到一个爱好
// 因为它们是共享的同一个数组
// 但是, 我们希望每个人有属于自己的爱好, 而不是所有的 Person 爱好都相同


// 组合构造函数和原型模式
// 创建自定义类型的最常见方式，就是组合使用构造函数模式与原型模式
// 构造函数模式用于定义实例属性，而原型模式用于定义方法和共享的属性
// 结果，每个实例都会有自己的一份实例属性的副本，但同时又共享着对方法的引用，最大限度地节省了内存
// 创建Person构造函数
function PersonI(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.hobby = ['Basketball', 'Football'];
}

// 重新Peron的原型对象
PersonI.prototype = {
    constructor: PersonI,
    sayHello: function () {
        console.log('Hello JavaScript');
    },
};

// 创建对象
var person15 = new PersonI('张三', 20, 188);
var person16 = new PersonI('李四', 22, 203);

// 测试是否共享了函数
console.log(person15.sayHello == person16.sayHello); // true

// 测试引用类型是否存在问题
person15.hobby.push('tennis');
console.log(person15.hobby);
console.log(person16.hobby);