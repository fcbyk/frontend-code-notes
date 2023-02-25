// arguments 是一个对应于传递给函数的参数的类数组对象

function func1(a, b, c) {
  console.log(arguments[0]);
  // Expected output: 1

  console.log(arguments[1]);
  // Expected output: 2

  console.log(arguments[2]);
  // Expected output: 3

  console.log(arguments)
}

func1(1, 2, 3);
