Number.prototype[Symbol.iterator] = function () {
  let index = 0;
  let len = 2
  return {
    next: function () { //实现next
      index++
      if (index < len) {
        return { //遍历中
          value: 'hello',
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

num = 3
console.log(...num);