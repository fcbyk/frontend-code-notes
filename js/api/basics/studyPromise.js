// JavaScript 语言的一大特点就是单线程，
// 也就是说同一个时间只能处理一个任务。
// 为了协调事件、用户交互、脚本、UI 渲染和网络处理等行为，防止主线程的不阻塞，
// （事件循环）Event Loop 的方案应运而生
// JavaScript 处理任务是在等待任务、执行任务 、休眠等待新任务中不断循环中，也称这种机制为事件循环

// 宏任务与微任务
// 只有promise的then会产生新的微任务，放在微任务队列中
// 计时器到时间会产生新的宏任务
// 执行顺序：主线程 -> 微任务队列依次执行 -> 宏任务队列依次执行
export function test1(){
    console.log("主线程 代码1");

    setTimeout(function() {
        console.log("宏任务1 代码1");
    }, 0);

    Promise.resolve().then(function() {
        console.log("微任务1 代码1");
    }).then(function() {
        console.log("微任务2 代码1");
    });

    console.log("主线程 代码2");
}

// 注意实例化 Promise 时执行的代码是同步的。属于主线程
export function test2(){
    setTimeout(() => console.log("宏任务1 代码1"));

    new Promise(resolve => {
        resolve();
        console.log("主线程 代码1");
    }).then(_ => {
        console.log("微任务1 代码1"); 
    });

    console.log("主线程 代码2");
}

// 观察执行顺序
export function test3(){
    setTimeout(() => {
        console.log("宏任务1 代码1");

        setTimeout(() => {
          console.log("宏任务1 产生的宏任务A");
        }, 0);

        new Promise(resolve => {
          console.log("宏任务1 代码2");
          resolve();
        }).then(() => {
          console.log("宏任务1 产生的微任务A");
        });
    }, 0);

    new Promise(resolve => {
        console.log("主线程 代码1");
        resolve();
    }).then(() => {
        console.log("主线程 产生的微任务1");
    });

    console.log("主线程 代码2");
}