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

// Promise初体验
// 肯德基例子
export function test4(){
    let kfc = new Promise((resolve, reject) => {
        // 肯德基执行的动作
        console.log("肯德基厨房开始做饭");
        resolve("我是肯德基，你的餐已经做好了");
    }).then(msg => {
        // 爸爸执行的动作
        console.log(`收到肯德基消息: ${msg}`);
        return {
          then(resolve) {
            setTimeout(() => {
                resolve("孩子，我吃了两秒了，不辣，你可以吃了");
            }, 2000);
          }
        };
    }).then(msg => {
        // 儿子执行的动作
        return new Promise((resolve, reject) => {
          console.log(`收到爸爸消息: ${msg}`);
          setTimeout(() => {
            resolve("妈妈，我和向军爸爸吃完饭了");
          }, 2000);
        });
    }).then(msg => {
        // 妈妈执行的动作
        console.log(`收到孩子消息: ${msg},事情结束`);
    });
}

// 肯德基例子不使用promise的传统写法，形成回调地狱，非常难读
function notice(msg, then) {
    then(msg);
}
export function test4s() {
    notice("肯德基厨房开始做饭", msg => {
        console.log(msg);
        notice("我是肯德基，你的餐已经做好", msg => {
            console.log(`收到肯德基消息: ${msg}`);
            setTimeout(() => {
                notice("孩子，我吃了两秒了，不辣，你可以吃了", msg => {
                    console.log(`收到爸爸消息: ${msg}`);
                    setTimeout(() => {
                        notice("妈妈，我和向军爸爸吃完饭了", msg => {
                            console.log(`收到孩子消息: ${msg},事情结束`);
                        });
                    }, 2000);
                });
            }, 2000);
        });
    });
}

// 异步状态
// Promise 包含pending、fulfilled、rejected三种状态
export function test5(){
    // 初始化 promise 时的状态为pending，等待状态
    console.log(new Promise(() => {}))

    // 调用传进来的函数，把状态改为 fulfilled 已经解决状态
    console.log(new Promise((resolve, reject) => {
        resolve();
    }))

    // 调用传进来的函数，把状态改为 rejected 拒绝处理状态
    console.log(new Promise((resolve, reject) => {
        reject();
    }))
}

// promise 创建时即立即执行即同步任务，then 会放在异步微任务中执行，需要等同步任务执行后才执行
export function test6(){
    let promise = new Promise((resolve, reject) => {
        resolve("已经解决状态");
        console.log("同步任务2");
    }).then(msg => {
        // 已经解决状态
        console.log(msg);
    }).then(msg => {
        // undefined
        console.log(msg);
    })
    console.log("同步任务1");
}

// then
// 一个 promise 需要提供一个 then 方法访问 promise 结果
// then 方法必须返回 promise，用户返回或系统自动返回
// 第一个函数在成功状态时执行，即执行resolve时，执行then第一个函数处理成功状态
// 第二个函数在失败状态时执行，即执行reject 时，执行then第二个函数处理失败状态，该函数是可选的
// 两个函数都接收 promise 传出的值做为参数
// 也可以使用catch 来处理失败的状态
export function test7(){
    // 状态不改变，then不会执行
    new Promise(()=>{
        console.log('状态不改变，下面不会执行');
    }).then(
        msg => {
            console.log(`成功：${msg}`);
        },
        error => {
            console.log(`失败:${error}`);
        }
    )

    // 状态改变，then执行
    new Promise((res, rej)=>{
        console.log('状态改变');
        res('成功状态');
    }).then(
        msg => {
            console.log(`成功：${msg}`);
        },
        error => {
            console.log(`失败:${error}`);
        }
    )

    // promise 传向 then 的传递值，如果 then 没有可处理函数，会一直向后传递
    new Promise((res, rej)=>{
        console.log('状态改变');
        res('成功状态');
    })
    .then()
    .then()
    .then(
        msg => {
            console.log(`第三个then：${msg}`);
        },
        error => {
            console.log(`第三个then:${error}`);
        }
    ).then(
        msg => {
            console.log(`第四个then：${msg}`);
        },
        error => {
            console.log(`第四个then:${error}`);
        }
    )

    // 如果 then 返回 promise ，下一个then 会在当前promise状态改变后执行
    // 后面的then 就是对返回的 promise 的处理，需要等待该 promise 变更状态后执行
    new Promise((res, rej)=>{
        res('成功状态');
    })
    .then(()=>{
        // 这个promise状态不改变，下面的then不会执行
        return new Promise(()=>{})
    })
    .then(
        msg => {
            console.log(`测试 第二个then：${msg}`);
        }
    ).then(
        msg => {
            console.log(`测试 第三个then：${msg}`);
        }
    )
}

// then 方法必须返回 promise，用户返回或系统自动返回
// 只有一个then拿到PromiseResult，往后是undefined
// promise的状态会往后传递
export function test8(){
    let p1 = new Promise((resolve, reject) => {
        console.log('同步任务代码');
        resolve("已经解决状态");
        // reject("失败")
    })
    console.log("第一个promise");
    console.log(p1);

    let p2 = p1.then(
        msg => {
            // 异步任务代码
            console.log(msg);
        },
        msg => {
            console.log(msg);
    })
    console.log("第二个promise");
    console.log(p2);

    let p3 = p2.then(
        msg => {
            // 异步任务代码
            console.log(msg);
        },
        msg => {
            console.log(msg);
    })
    console.log("第三个promise");
    console.log(p3);
}

// promise 的语法糖
// async/await 本质还是 promise，只是更简洁的语法糖书写
// 使用 await 关键词后会等待 promise 完成
// await 后面一般是 promise，如果不是直接返回
// await 必须放在 async 定义的函数中使用
// await 用于替代 then 使编码更优雅
// 肯德基例子语法糖改写
export async function test9(){
    // 肯德基执行的动作
    let kfc = new Promise((resolve, reject) => { 
        console.log("肯德基厨房开始做饭");
        setTimeout(() => {
            resolve("我是肯德基，你的餐已经做好了");
        }, 5000);
    })
    // 在 await 这行暂停执行，直到等待 promise 返回结果后才继执行
    let kfcmsg = await kfc
    
    // 爸爸执行的动作
    console.log(`收到肯德基消息: ${kfcmsg}`);
    let dadmsg = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("孩子，我吃了两秒了，不辣，你可以吃了");
        }, 2000);
    })

    // 儿子执行的动作
    console.log(`收到爸爸消息: ${dadmsg}`);
    let sonmsg = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("妈妈，我和向军爸爸吃完饭了");
        }, 2000);
    })

    // 妈妈执行的动作
    console.log(`收到孩子消息: ${sonmsg},事情结束`);
}

// 肯德基例子语法糖改写2
export async function test10(){
    // 爸爸收到肯德基消息
    console.log(`收到肯德基消息: ${await new Promise((resolve, reject) => { 
        console.log("肯德基厨房开始做饭");
        setTimeout(() => {
            resolve("我是肯德基，你的餐已经做好了");
        }, 5000);
    })}`);

    // 儿子收到爸爸消息
    console.log(`收到爸爸消息: ${await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("孩子，我吃了两秒了，不辣，你可以吃了");
        }, 2000);
    })}`);

    // 妈妈收到孩子消息
    console.log(`收到孩子消息: ${await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("妈妈，我和向军爸爸吃完饭了");
        }, 2000);
    })},事情结束`);
}

// 观察下面代码
export function test11(){
    async function asy(){
        console.log("async函数代码1");
        await new Promise((resolve)=>{
            console.log("async函数代码2")
            // resolve()
        });

        // 上面Promise状态不改变，下面的代码不执行
        console.log("async函数代码3")
        await new Promise(()=>{
            console.log("async函数代码4")
        });
    }
    asy()
    console.log("同步代码1")
}