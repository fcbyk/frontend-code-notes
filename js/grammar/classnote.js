// 为了和其他语言继承形态一致，JS提供了class 关键词用于模拟传统的class 
// 但底层实现机制依然是原型继承
// class 只是语法糖为了让类的声明与继承更加简洁清晰

(function(){
    // 类声明
    class User {
    }
    
    let Article = class {
    };
    
    // 对比原型
    function Usera(){
    }
    
    console.log(new Article());
    console.log(new User());
    console.log(new Usera());

    // 类其实是函数
    console.log(typeof User); //function
    console.log(typeof Usera); //function
})();

(function(){
    class User {
        // 类方法间不需要逗号，和Java一样
        show() {}
        get() {
          console.log("get method");
        }
    }
    
    const hd = new User();
    hd.get();
})();

(function(){
    class User {
        // 类的属性不是写冒号，而是写等号，和Java一样
        // 分号结束或换行结束

        // 这里属性也不在原型对象上，在实例对象上
        hello = 100

        constructor(name) {

            // 这里声明的属性不在原型对象上，在实例对象上
            this.name = name;

            // 这里声明的方法不在原型对象上，在实例对象上
            this.show = function() {};
            // constructor为构造函数，和之前原型链的构造函数是一样的 
            console.log(User == User.prototype.constructor); //true
        }

        // 这里声明的方法在原型对象上
        getName() {
            return this.name;
        }
    }
    const xj = new User("向军大叔");
    console.log(xj);

    // 构造函数用于传递对象的初始参数
    // 但不是必须定义的如果不设置系统会设置如下类型
    //   constructor(...args) {
    //     super(...args);
    //   }
})();

(function(){
    // 静态属性，静态方法
    // 在Java中，静态属性（方法）通过类名调用，不需要创建实例对象
    // JavaScript 这里也是一样的，JavaScript 里面的构造函数就是一个对象
    // 函数对象的属性和方法 等于 静态属性和静态方法
    // 不需要new实例，直接构造函数.方法或属性，就能调用

    class User {
        static names = '我是静态属性'
        static fun(){
            console.log("我是静态方法")
        }
    }

    console.log(User.names)
    User.fun()

    // 原型的实现方式
    // JavaScript 里的静态属性/方法，本质是构造函数对象的属性/方法
    function Usera(){}
    Usera.names = '我是静态属性s'
    Usera.fun = function (){
        console.log("我是静态方法s")
    }
    
    console.log(Usera.names)
    Usera.fun()
})();

(function(){
    // private 私有属性和Java一样，只在当前类可以访问到，并且不允许继承使用
    // JavaScript中为属性或方法名前加 # 为声明为私有属性
    // 私有属性只能在声明的类中使用
    class User {
        #hello = 100
        #fun(){
            console.log("私有方法")
        }
        getHello(){
            return this.#hello
        }
    }
    let xj = new User()
    console.log(xj.hello) //undefined
    //xj.fun()    //xj.fun is not a function
    console.log(xj.getHello())
})();

(function(){
    // 使用 extends 关键字实现继承

    class User {
        constructor(name) {
          this.name = name;
        }
        show() {
            console.log("super hello")
        }
    }

    class Admin extends User {
        constructor(name) {
            // 继承时必须在子类构造函数中调用 super() 执行父类构造函数
            super(name);

            //使用super 可以执行父类方法
            super.show();
        }

        // 方法覆盖
        show(){
            console.log("sub show")
        }
    }

    let hd = new Admin("后盾人");
    console.log(hd);
})();