// EventTarget 接口由可以接收事件、并且可以创建侦听器的对象实现。
// 换句话说，任何事件目标都会实现与该接口有关的这三个方法。

// Element 及其子项、document 和 window 是最常见的事件目标，
// 但其他对象也可以是事件目标。
// 比如 XMLHttpRequest、AudioNode 和 AudioContext 等等

// EventTarget 接口的三个方法
(function(){
    // EventTarget.addEventListener()
    // 在 EventTarget 上注册特定事件类型的事件处理程序。

    // EventTarget.removeEventListener()
    // EventTarget 中删除事件侦听器。

    // EventTarget.dispatchEvent()
    // 将事件分派到此 EventTarget。
})();