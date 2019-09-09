let obj = {
  b : '23',
  [Symbol.iterator]: function () {
    const self = this;
    let keys = Object.keys(obj1)
    let index = 0;
    let len = keys.length
    return {
      next: function () { //实现next
        if (index < len) {
          return { //遍历中
            value: self[keys[index++]] + 'hello',
            done: false //表示遍历没有结束,done设置为fasle
          }
        } else {
          return { //遍历结束
            value: undefined, //结束后，返回undefined
            done: true //done设置为true，表示遍历结束
          }
        }
      }
    }
  }
}
Object.defineProperty(obj, 'a', {
  enumerable: false,
  value: 'haha'
})
let obj1 = {
  ...obj
}
console.log(obj);