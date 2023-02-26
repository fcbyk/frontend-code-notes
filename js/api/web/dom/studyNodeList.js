// NodeList 对象是节点的集合，通常是由属性，如Node.childNodes, 
// 和方法，如document.querySelectorAll 返回的。
// NodeList 不是一个数组，是一个类似数组的对象 (Like Array Object)。
// 虽然 NodeList 不是一个数组，但是可以使用 forEach() 来迭代。你还可以使用 Array.from() 将其转换为数组。

// 在一些情况下，NodeList 是一个实时集合，也就是说，如果文档中的节点树发生变化，NodeList 也会随之变化。
// 例如，Node.childNodes 是实时的：
// 在其他情况下，NodeList 是一个静态集合，也就意味着随后对文档对象模型的任何改动都不会影响集合的内容。
// 比如 document.querySelectorAll 就会返回一个静态 NodeList。