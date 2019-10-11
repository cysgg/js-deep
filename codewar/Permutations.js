function permutations(string) {
  let len = string.length;
  let arr = []
  fordeep(arr, len, string, '')
  return arr
}
function fordeep (arr, len, string, temp) {
  if (!string || string === '') {
    !arr.includes(temp) && arr.push(temp)
  } else {
    for (let i = 0; i < string.length; i++) {
      let temp1 = temp.slice()
      let string1 = string.slice()
      temp1 += string1[i]
      string1 = string1.replace(string1[i], '')
      fordeep(arr, len, string1, temp1)
    }
  }
}
console.log(permutations('aabb'))