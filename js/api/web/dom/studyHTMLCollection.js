// HTMLCollection 接口表示一个包含了元素（元素顺序为文档流中的顺序）的通用集合（与 arguments 相似的类数组 (array-like) 对象），
// 还提供了用来从该集合中选择元素的方法和属性。

// HTML DOM 中的 HTMLCollection 是即时更新的（live）；当其所包含的文档结构发生改变时，它会自动更新。
// 因此，最好是创建副本（例如，使用 Array.from）后再迭代这个数组以添加、移动或删除 DOM 节点。