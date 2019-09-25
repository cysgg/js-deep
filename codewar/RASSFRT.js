/**
 * 
 * @param {Array.<Array.<String>>} triplets 一个二维数组 值是字符串
 */
var recoverSecret = function(triplets) {
  let zancunarr = new Map()
  for (let i = 0; i < triplets.length; i++) {
    for (let j = 0; j < triplets[i].length; j++) {
      if(!zancunarr.has(triplets[i][j])){
        zancunarr.set(triplets[i][j],new Set())
      }
      if (j === 0) {
        zancunarr.get(triplets[i][j]).add(triplets[i][j+1])
        zancunarr.get(triplets[i][j]).add(triplets[i][j+2])
      } else if (j === 1) {
        zancunarr.get(triplets[i][j]).add(triplets[i][j+1])
      }
    }
  }
  for( [key,value] of zancunarr) {
    
  }
  zancunarr
  return zancunarr
}

function getStr (s,arr) {
  if(arr.get(s).length === 0){
    return ''
  }
  for( value of arr.get(s)) {
    return s + arguments.callee(value,arr)
    
  }
}

secret1 = "whatisup"
triplets1 = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

console.log(recoverSecret(triplets1));