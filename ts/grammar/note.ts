//TypeScript = Type + JavaScript
//在 JS 基础之上，为 JS 添加了类型支持

//hello world
let Hello:string = 'Hello World'
console.log(Hello)

//安装编译 TS 的工具包
//npm i -g typescript
//typescript 包：用来编译 TS 代码的包，提供了 tsc 命令，实现了 TS -> JS 的转化
//验证是否安装成功：tsc –v（查看 typescript 的版本）
//编译：tsc note.ts

//使用 ts-node 包，直接在 Node.js 中执行 TS 代码
//npm i -g ts-node（ts-node 包提供了 ts-node 命令）
//ts-node note.ts
//ts-node 命令在内部偷偷的将 TS -> JS，然后，再运行 JS 代码

//JS 已有类型
//原始类型：number/string/boolean/null/undefined/symbol
//对象类型：object（包括，数组、对象、函数等对象）
//TS 新增类型
//联合类型、自定义类型（类型别名）、接口、元组、字面量类型、枚举、void、any 等

//类型注解
//变量标识符后的 : number 就是类型注解
function typeAnnotation():void{
    let a:number = 18
    let b:string = 'a'
    let c:boolean = true
    let d:null = null
    let e:undefined = undefined
    let f:symbol
    
    a = 10      //编译器通过
    // a = 'hello' //编译器报错
    
    //数组类型的注解有两种写法
    let g:number[] = [1,2,3]
    let h:Array<number> = [1,2,3]

    let i:boolean[] = [false,true,true]
    let j:Array<string> = ['a','b','c']
}

