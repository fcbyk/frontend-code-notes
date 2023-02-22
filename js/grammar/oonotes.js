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
    let o = new Object();
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
let person9 = new PersonD();

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
let person15 = new PersonI('张三', 20, 188);
let person16 = new PersonI('李四', 22, 203);

// 测试是否共享了函数
console.log(person15.sayHello == person16.sayHello); // true

// 测试引用类型是否存在问题
person15.hobby.push('tennis');
console.log(person15.hobby);
console.log(person16.hobby);


// 原型链
// 继承是面向对象中非常重要的特性
// JS实现继承主要是依靠原型链来实现的

// 我们知道, 可以通过 PersonI.prototype = {}的方式来重写原型对象
// 假如, 我们后面赋值的不是一个{}, 而是另外一个类型的实例, 结果会是怎么样呢
// 显然，此时的原型对象将包含一个指向另一个原型的指针，相应地，另一个原型中也包含着一个指向另一个构造函数的指针
// 假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条。这就是所谓原型链的基本概念

// 1.创建AnimalA的构造函数
function AnimalA() {
    this.animalProperty = '动物';
}

// 2.给AnimalA的原型中添加一个方法
AnimalA.prototype.animalFunction = function () {
    console.log(this.animalProperty);
};

// 3.创建DogA的构造函数
function DogA() {
    this.dogProperty = '狗';
}

// 4.给DogA的原型对象重新赋值
DogA.prototype = new AnimalA();

// 5.给DogA添加属于自己的方法
DogA.prototype.dogFunction = function () {
    console.log(this.dogProperty);
};

// 6.创建DogA的实例
let dog1 = new DogA();
dog1.animalFunction(); //动物
dog1.dogFunction(); //狗

// 创建 dog1 对象, dog1 对象会有自己的属性, dogProperty
// 另外, dog1 对象有一个 proto 指向 DogA 的原型
// DogA 的原型是谁呢? 就是我们之前的 new AnimalA(AnimalA 的一个实例), 所以会指向它

// constructor 问题
console.log(dog1)
console.log(dog1.constructor) //构造器为 AnimalA, 在原型链上搜索constructor

// 在DogA的新原型对象上添加构造器属性
Object.defineProperty(DogA.prototype,'constructor', {
    enumerable: false,
    value: DogA,
});

console.log(dog1)
console.log(dog1.constructor) //DogA


// 原型和实例的关系
// 如果我们希望确定原型和实例之间的关系, 有两种方式

// instanceof 操作符
// 只要用这个操作符来测试实例的原型链中出现过的构造函数，结果就会返回 true
console.log(dog1 instanceof Object); // true
console.log(dog1 instanceof AnimalA); // true
console.log(dog1 instanceof DogA); // true

// isPrototypeOf()方法
// 只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型
// 因此 isPrototypeOf()方法也会返回 true
console.log(Object.prototype.isPrototypeOf(dog1)); // true
console.log(AnimalA.prototype.isPrototypeOf(dog1)); // true
console.log(DogA.prototype.isPrototypeOf(dog1)); // true

// 查看原型链
console.log(dog1)                                           // DogA{}
console.log(dog1.__proto__)                                 // AnimalA{}
console.log(dog1.__proto__.__proto__)                       // {}    注: object对象前面没有名字
console.log(dog1.__proto__.__proto__.__proto__)             // {}
console.log(dog1.__proto__.__proto__.__proto__.__proto__)   // null
// or
console.log(dog1)
console.log(DogA.prototype)     
console.log(DogA.prototype.__proto__)
console.log(DogA.prototype.__proto__.__proto__)
console.log(DogA.prototype.__proto__.__proto__.__proto__)

// 总的来说,有一点点乱
// 狗实例 -> 动物实例(狗的原型) -> object实例(动物的原型) -> object原型 -> null
// 对象分实例对象和原型对象, 两种身份混合就有一点点乱

// 查看一下浏览器内置的原型链
console.log(window)                                                         // Window{}
console.log(window.__proto__)                                               // Window{}
console.log(window.__proto__.__proto__)                                     // WindowProperties{} 
console.log(window.__proto__.__proto__.__proto__)                           // EventTarget{}
console.log(window.__proto__.__proto__.__proto__.__proto__)                 // {}
console.log(window.__proto__.__proto__.__proto__.__proto__.__proto__)       // null

console.log(document)                                          
console.log(document.__proto__)
console.log(document.__proto__.__proto__)
console.log(document.__proto__.__proto__.__proto__)
console.log(document.__proto__.__proto__.__proto__.__proto__)
console.log(document.__proto__.__proto__.__proto__.__proto__.__proto__)
console.log(document.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__)

// 关于原型链,在谷歌浏览器控制台查看
// 关于谷歌浏览器的对象的内部属性__proto__, 使用了 [[Prototype]] 代替
// 一直展开这个, 会发现到object原型对象时, 就没有 [[Prototype]] 属性, 但有__proto__属性
// 如果展开__proto__属性, 则重复了展开[[Prototype]]属性看到的原型链, 最后又回到object, __proto__属性指向null

// 猜测
// object的__proto__属性记录了当前对象的原型链信息
// 我们写的 window.__proto__, 实际上是去object对象的__proto__属性搜索
// 以上为猜测, 未通过实践验证

// 注意构造函数的 Prototype 和 [[Prototype]] 是不一样的
// [[Prototype]] 为隐式原型 __proto__
// 函数的隐式原型暂时不讨论, 容易晕
// 知道函数的构造函数是Function()即可


// 原型链存在的问题
// 原型链存在最大的问题是关于引用类型的属性.
// 通过上面的原型实现了继承后, 子类的 DogA 对象继承了(可以访问)AnimalA 实例中的属性(animalProperty).
// 但是如果这个属性是一个引用类型(比如数组或者其他引用类型), 就会出现问题.

// 引用类型的问题代码:
// 1.定义AnimalB的构造函数
function AnimalB() {
    this.colors = ['red', 'green'];
}

// 2.给AnimalB添加方法
AnimalB.prototype.animalFunction = function () {
    alert(this.colors);
};

// 3.定义DogB的构造函数
function DogB() {
    this.dogProperty = 'DogB';
}

// 4.给DogB赋值新的原型对象
DogB.prototype = new AnimalB();

// 5.给DogB添加方法
DogB.prototype.personFunction = function () {
    alert(this.dogProperty);
};

// 6.创建DogB对象, 并且调用方法
let dog2 = new DogB();
let dog3 = new DogB();

console.log(dog2.colors); // red,green
console.log(dog3.colors); // red,green

dog2.colors.push('blue');

console.log(dog2.colors); // red,green,blue
console.log(dog3.colors); // red,green,blue

// 修改了 dog2 中的 colors 属性, 添加了一个新的颜色 blue
// 再次查看两个对象的 colors 属性, 会发现 dog3 的 colors 属性也发生了变化
// 两个实例应该是相互独立的, 这样的变化如果我们不制止将会在代码中引发一些列问题.

// 原型链的其他问题
// 在创建子类型的实例时，不能向父类型的构造函数中传递参数
// 实际上，应该说是没有办法在不影响所有对象实例的情况下，给父类型的构造函数传递参数
// 从而可以修改父类型中属性的值, 在创建构造函数的时候就确定一个值


// 经典继承
// 为了解决原型链继承中存在的问题, 开发人员提供了一种新的技术: constructor stealing
// (有很多名称: 借用构造函数或经典继承或伪造对象), steal 是偷窃的意思, 但是这里可以翻译成借用
// 经典继承的做法非常简单: 在子类型构造函数的内部调用父类型构造函数

// 创建AnimalC的构造函数
function AnimalC(age) {
    this.colors = ['red', 'green'];
    this.age = age;
}

// 创建DogC的构造函数
function DogC(age) {
    // 继承AnimalC的属性
    // 也可以传递参数
    AnimalC.call(this, age);

    // 给自己的属性赋值
    this.name = 'ZHANG';
}

// 创建DogC对象
let dog4 = new DogC();
let dog5 = new DogC(10);

console.log(dog4.colors);   // red,green
console.log(dog5.colors);   // red,green
dog4.colors.push('blue');
console.log(dog4.colors);   // red,green,blue
console.log(dog5.colors);   // red,green
console.log(dog5.age);      // 10

// 我们通过在 DogC 构造函数中, 使用 call 函数, 将 this 传递进去
// 这个时候, 当 AnimalC 中有相关属性初始化时, 就会在 this 对象上进行初始化操作
// 这样就实现了类似于继承 AnimalC 属性的效果

// 经典继承的问题
// 对于经典继承理解比较深入, 你已经能发现: 经典继承只有属性的继承, 无法实现方法的继承
// 因为调用 call 函数, 将 this 传递进去, 只能将父构造函数中的属性初始化到 this 中
// 但是如果函数存在于父构造函数的原型对象中, this 中是不会有对应的方法的

// 组合继承
// 如果你认识清楚了上面两种实现继承的方式存在的问题, 就可以很好的理解组合继承了
// 组合继承(combination inheritance, 有时候也称为伪经典继承)
// 组合继承就是发挥原型链和经典继承各自的优点来完成继承的实现
// 使用原型链实现对原型属性和方法的继承
// 通过经典继承实现对实例属性的继承, 以及可以在构造函数中传递参数
// 1.创建构造函数的阶段
// 1.1.创建AnimalD的构造函数
function AnimalD(age) {
    this.age = age;
    this.colors = ['red', 'green'];
}

// 1.2.给AnimalD添加方法
AnimalD.prototype.AnimalDFunction = function () {
    console.log('Hello AnimalD');
};

// 1.3.创建DogD的构造函数
function DogD(name, age) {
    AnimalD.call(this, age);
    this.name = name;
}

// 1.4.给DogD的原型对象重新赋值
DogD.prototype = new AnimalD(0);

// 1.5.给DogD添加方法
DogD.prototype.DogDFunction = function () {
    console.log('Hello DogD');
};

// 2.验证和使用的代码
// 2.1.创建DogD对象
let dog6 = new DogD('zcoder', 18);
let dog7 = new DogD('www', 38);

// 2.2.验证属性
console.log(dog6.name + '-' + dog6.age); // zcoder-18
console.log(dog7.name + '-' + dog7.age); // www-38

// 2.3.验证方法的调用
dog6.AnimalDFunction(); // Hello AnimalD
dog6.DogDFunction(); // Hello DogD

// 2.4.验证引用属性的问题
dog6.colors.push('blue');
console.log(dog6.colors); // red,green,blue
console.log(dog7.colors); // red,green

// 组合继承是 JavaScript 最常用的继承模式之一
// 如果你理解到这里, 点到为止, 那么组合来实现继承只能说问题不大, 但是它依然不是很完美

// 组合继承最大的问题就是无论在什么情况下, 都会调用两次父类构造函数.
// 一次在创建子类原型的时候
// 另一次在子类构造函数内部(也就是每次创建子类实例的时候)
// 另外, 值得注意的是, 所有的子类实例事实上会拥有两份父类的属性
// 一份在当前的实例自己里面(也就是 dog6 本身的), 另一份在子类对应的原型对象中(也就是 dog6.proto里面)
// 当然, 这两份属性我们无需担心访问出现问题, 因为默认一定是访问实例本身这一部分的


// 原型式继承
// 原型式继承的思想和渊源
// 这种模式要从道格拉斯·克罗克福德（Douglas Crockford, 著名的前端大师, JSON 的创立者）在 2006 年写的一篇文章说起: Prototypal Inheritance in JavaScript(在 JS 中使用原型式继承)
// 在这篇文章中, 它介绍了一种继承方法, 而且这种继承方法不是通过构造函数来实现的.
// 为了理解这种方式, 我们先再次回顾一下 JavaScript 想实现继承的目的: 重复利用另外一个对象的属性和方法

// 原型式继承的核心函数
// 封装objectA()函数
function objectA(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
// 在 object()函数内部, 先创建一个临时的构造函数
// 然后将传递的对象作为这个构造函数的原型
// 最后返回了这个临时类型的一个新的实例
// 事实上, object()对传入的对象执行了一次浅复制（注意不是浅拷贝）
// 理解为创建了一个o类型的空实例对象，空实例对象可以用o对象的属性和方法

// 原型式继承的使用
// 使用原生式继承
let dog8 = {
    name: '小明',
    colors: ['red', 'green'],
};

// 通过dog8去创建另外一个对象
let dog9 = objectA(dog8);
dog9.name = '小小明';
dog9.colors.push('blue');

console.log(dog8.name); // 小明
console.log(dog8.colors); // red,green,blue

console.log(dog9.name); // 小小明
console.log(dog9.colors); // red,green,blue

console.log(dog8); 
console.log(dog9);

// 这种方式和我们传统意义上理解的继承有些不同. 它做的事情是通过一个对象去创建另外一个对象.(利用 dog8 去创建 dog9)
// 当然, dog9 中继承过来的属性是放在了自己的原型对象中的.
// 也可以给 dog9 自己再次添加 name 属性, 这个时候 name 才是在实例本身中.
// 但是如果是修改或者添加引用类型的内容, 还是会引起连锁反应.
// 可能暂时你看不到这些代码的意义, 但是这些代码是我们后续最终方案的前提思想, 所以先看看和练习一下这些代码.

// 针对这种思想, ES5 中新增了 Object.create()方法来规范化了原型式继承
// create是Object构造函数对象的一个属性，这个属性也是一个函数对象，所以可以调用
// 也就是上面的代码可以修改成这样(只是将 object 函数修改成了 Object.create)
let dog10 = {
    name: '小明',
    colors: ['red', 'green'],
};

let dog11 = Object.create(dog10);
dog11.name = '小小明';
dog11.colors.push('blue');

console.log(dog10.name); // 小明
console.log(dog10.colors); // red,green,blue

console.log(dog11.name); // 小小明
console.log(dog11.colors); // red,green,blue

console.log(dog10); 
console.log(dog11);

// Object.create()还可以传入第二个参数
// 第二个参数用于每个属性的自定义描述
let dog12 = Object.create(dog10,{
    name:{
        value:"语雀"
    }
})
console.log(dog12); 

// 原型式继承的的优点和缺点
// 如果我们只是希望一个对象和另一个对象保持类似的情况下, 原型式继承完全可以胜任, 这是它的优势.
// 但是, 原型式继承依然存在属性共享的问题, 就像使用原型链一样

// 寄生式继承
// 寄生式继承的思想
// 寄生式(Parasitic)继承是与原型式继承紧密相关的一种思想, 并且同样由道格拉斯·克罗克福德(Douglas Crockford)提出和推广的
// 寄生式继承的思路是结合原型类继承和工厂模式的一种方式
// 即创建一个封装继承过程的函数, 该函数在内部以某种方式来增强对象, 最后再将这个对象返回

// 寄生式函数多增加了一个核心函数
// 封装objectB函数
function objectB(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

// 封装创建新对象的函数
function createAnother(original) {
    let clone = objectB(original);
    clone.sayHello = function () {
        console.log('Hello JavaScript');
    };
    return clone;
}

// 我们来使用一下寄生式继承
// person17对象
let person17 = {
    name: 'zcoder',
    colors: ['red', 'green'],
};

// 新的对象
let person18 = createAnother(person17);
person18.sayHello();

console.log(person17)
console.log(person18)

// 我们基于 person 对象, 创建了另外一个对象 person1
// 在最新的 person1 对象中, 不仅会拥有 person 的属性和方法, 而且还有自己定义的方法

// 寄生式继承存在的问题:
// 寄生式继承和原型式继承存在一样的问题, 引用类型会共享 (因为是在原型式继承基础上的一种封装)
// 另外寄生式继承还存在函数无法复用的问题, 因为每次 createAnother 一个新的对象, 都需要重新定义新的函数(和之前的工厂函数一样)


// 寄生组合式继承

// 现在我们来回顾一下之前提出的比较理想的组合继承
// 组合继承是比较理想的继承方式, 但是存在两个问题
// 问题一: 构造函数会被调用两次: 一次在创建子类型原型对象的时候, 一次在创建子类型实例的时候
// 问题二: 父类型中的属性会有两份: 一份在原型对象中, 一份在子类型实例中

// 事实上, 我们现在可以利用寄生式继承将这两个问题给解决掉
// 你需要先明确一点: 当我们在子类型的构造函数中调用父类型.call(this, 参数)这个函数的时候, 就会将父类型中的属性和方法复制一份到了子类型中. 所以父类型本身里面的内容, 我们不再需要
// 这个时候, 我们还需要获取到一份父类型的原型对象中的属性和方法
// 能不能直接让子类型的原型对象 = 父类型的原型对象呢?
// 不要这么做, 因为这么做意味着以后修改了子类型原型对象的某个引用类型的时候, 父类型原生对象的引用类型也会被修改.
// 我们使用前面的寄生式思想就可以了.

// 寄生组合式的核心代码
// 定义object函数
function objectC(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

// 定义寄生式核心函数
function inhreitPrototype(subType, superType) {
    // let prototype = objectC(superType.prototype);
    // 可以使用create函数代替
    let prototype = Object.create(superType.prototype);
    prototype.constructor = subType;
    subType.prototype = prototype;
}

// 定义AnimalE构造函数
function AnimalE(age) {
    this.age = age;
    this.colors = ['red', 'green'];
}

// 给AnimalE添加方法
AnimalE.prototype.AnimalEFunction = function () {
    alert('Hello AnimalE');
};

// 定义DogE构造函数
function DogE(name, age) {
    AnimalE.call(this, age);
    this.name = name;
}

// 使用寄生组合式核心函数
inhreitPrototype(DogE, AnimalE);

// 给DogE添加方法
DogE.prototype.DogEFunction = function () {
    console.log('Hello DogE');
};

let dog13 = new DogE("张三疯",18);
console.log(dog13)
console.log(dog13.__proto__)

// 这种方式的高效体现在现在它只调用了一次 Animal 的构造函数
// 并且也避免了在原型上面多出的多余属性, 而且原型之间不会产生任何的干扰(子类型原型和父类型原型之间)
// 在 ES5 中, 普遍认为寄生组合式继承是最理想的继承范式