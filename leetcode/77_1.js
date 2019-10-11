/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = []
  let len = n
  arr = Array.from({length: n}, (n, i) => i+1)
  for (let i = 0; i < len; i++) {
    let temp = []
    temp.push(arr[i])
    fordeep(len, i, result, temp, k - 1)
  }
  return result
}

function fordeep(len, i, result, temp, k) {
  if (k <= 0) {
    result.push(temp)
  }
  else {
    for (let j = i+1; j < len; j++) {
      let temp1 = temp.slice()
      temp1.push(arr[j])
      fordeep(len, j, result, temp1, k - 1)
    }
  }
}

console.log(combine(1, 1));
