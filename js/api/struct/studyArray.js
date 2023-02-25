// 数组对象是指一组数据的集合，其中的每个数据被称作元素
// js的数组可以存放任意类型的元素，例如字符串，数字，布尔值等
// 数组的字面量是方括号 [ ]

// 创建数组
(function(){
    let ar1 = new Array(); // 创建了一个空的数组

    // 用字面量创建是推荐的简单作法
    let ar2 = []; // 创建了一个空的数组
    let arr1 = [1, 2, 'pink老师', true];
    // 我们数组里面的数据一定用逗号分隔
    // 数组里面的数据 比如1,2， 我们称为数组元素

    // 多维数组定义
    const array1 = [["hdcms"], ["houdunren"]];
    console.log(array1[1][0]);

    // 数组是引用类型可以使用const声明并修改它的值
    const array2 = ["hdcms", "houdunren"];
    array2.push("houdunwang");
    console.log(array2);
})();

// 数组赋值
(function(){
    // 数组可以设置任何值，下面是使用索引添加数组
    let hd = ["后盾人"];
    hd[1] = "hdcms";

    // 下面直接设置 3 号数组，会将 1、2 索引的数组定义为空值
    let hd2 = ["后盾人"];
    hd2[3] = "hdcms";
    console.log(hd2.length); //4

    // 获取数组元素
    // 格式 数组名[索引号]  索引号从 0开始
    let arr2 = ['迪丽热巴', '古丽扎娜', '佟丽丫丫'];
    console.log(arr2[0]);
    console.log(arr2[1]);
    console.log(arr2[2]);
    console.log(arr2[3]); // 因为没有这个数组元素 所以输出的结果是 undefined
})();

// Array对象属性
(function(){
    let arr = new Array();
    console.log(arr);

    // length属性（在实例对象上），设置或返回数组元素的个数
    console.log(arr.length);
    arr.push("123");
    console.log(arr.length);

    // prototype属性（静态属性，在构造函数上），允许你向数组原型对象添加属性或方法。
    Array.prototype.test = "尼禄";
    console.log(arr.test);
    console.log(arr);
})();

// Array 对象方法 - 增删
// js的数组是一个线性表数据结构，可以当作栈，队列使用
// 有压栈，弹栈方法，也有出队入队方法等
// 物理结构不知道，应该是顺序存储，查找效率高，增删效率低
(function(){
    // push() 压栈，向数组的末尾添加一个或更多元素，并返回新的长度
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits);
    let len = fruits.push("Kiwi","Lemon","Pineapple");
    console.log(len);
    console.log(fruits);

    // pop() 弹栈，删除数组的最后一个元素并返回删除的元素
    console.log(fruits.pop());  //返回删除的元素
    console.log(fruits);

    // shift() 出队，删除并返回数组的第一个元素
    console.log(fruits.shift());  //返回删除的元素
    console.log(fruits);

    // 入队则使用 push()

    // unshift()，向数组的开头添加一个或更多元素，并返回新的长度
    console.log(fruits.unshift("Lemon","Pineapple")); 
    console.log(fruits);

    // splice()，从数组中添加或删除元素
    // array.splice(index,howmany,item1,.....,itemX)
    // 三个参数
    // index 规定从何处添加/删除元素（数组元素的下标）
    // howmany 可选。规定应该删除多少元素。必须是数字，但可以是 "0"。
    // 如果未规定howmany参数，则删除从 index 开始到原数组结尾的所有元素。
    // item1, ..., itemX 可选。要添加到数组的新元素
    // 返回值
    // 如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。
    console.log(fruits.splice(2));
    console.log(fruits);
    console.log(fruits.splice(1,0,"Apple"));
    console.log(fruits);
    console.log(fruits.splice(1,1,"Orange"));
    console.log(fruits);

    // concat(), 连接两个或更多的数组，并返回结果
    // 该方法不会改变现有的数组，而是返回一个新的数组
    // 参数：array1.concat(array2, array3,..., arrayX)
    let a = ["Google", "Taobao"];
    let b = ["Runoob", "Wiki", "Zhihu"];
    let c = a.concat(b);
    console.log(c);
})();

// Array 对象的迭代器
// entries()，返回数组的可迭代对象
// keys()，返回数组的可迭代对象，包含原始数组的键(key)
(function(){
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    console.log(fruits.entries());
    console.log(fruits.entries().next());
    console.log(fruits.entries().next().value);
    
    let a = fruits.entries();
    console.log(a.next().value);
    console.log(a.next().value);

    let b = fruits.keys();
    console.log(b);
    console.log(b.next());
    console.log(b.next().value);
    console.log(b.next().value);
})();

// Array 对象方法 - 查找
(function(){
    
})();