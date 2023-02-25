// Date 对象用于处理日期与时间

// 创建 Date 对象
(function(){
    // 有四种方式创建 Date 对象
    // new Date();
    // new Date(milliseconds);  参数为毫秒
    // new Date(dateString);
    // new Date(year, month, day, hours, minutes, seconds, milliseconds);
    let today = new Date()
    let d1 = new Date("October 13, 1975 11:13:00")
    let d2 = new Date(79,5,24)
    let d3 = new Date(79,5,24,11,33,0)

    console.log(today);
    console.log(d1);
    console.log(d2);
    console.log(d3);
})();

// Date 对象的get方法
(function(){
    let today = new Date();
    console.log(today.getDate());   // 从 Date 对象返回一个月中的某一天 (1 ~ 31)
    console.log(today.getDay());    // 	从 Date 对象返回一周中的某一天 (0 ~ 6)
    console.log(today.getFullYear());   // 	从 Date 对象以四位数字返回年份
    console.log(today.getHours());  // 	返回 Date 对象的小时 (0 ~ 23)
})();