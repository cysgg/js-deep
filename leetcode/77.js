/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []
  insetArr(Array.from({ length:n }, (v, i) => i+1), k, result, null, k)
  return result
};

/**
 * 
 * @param {Array} arr 
 * @param {Number} k 
 * @param {Array} result 
 */
function insetArr (arr, k, result, temp, len) {
  if (k <= 0) {
    !isinclude(result, temp) && result.push(temp)
  } else {
    let i = 0
    let temp1 = null
    while (i < arr.length) {
      if (len === k) {
        temp1 = []
      } else {
        temp1 = temp.slice()
      }
      temp1.push(arr[i])
      arr1 = arr.slice()
      arr1.splice(i++, 1)
      arguments.callee(arr1, k-1, result, temp1, len)
    }
  }
}

/**
 * 
 * @param {Array} arr 
 * @param {any} item 
 */
function isinclude (arr ,item) {
  for (let i = 0; i < arr.length; i++) {
    if (equar(arr[i], item)) {
      return true
    }
  }
  return false
}

function equar(a, b) { //判断两个数组是否值相等
  // 判断数组的长度
  if (a.length !== b.length) {
      return false
  } else {
      // 循环遍历数组的值进行比较
      a.sort()
      b.sort()
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) {
              return false
          }
      }
      return true;
  }
}

console.log(combine(4, 2));
