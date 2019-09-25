/**
 * 
 * @param {String} s 
 */
function firstNonRepeatingLetter(s) {
  // Add your code here
  // let map = []
  // for (let i = 0; i < s.length; i++) {
  //   const ele = s[i];
  //   if (map.includes(ele.toUpperCase())) {
  //     map.splice(map.indexOf(ele.toUpperCase()), 1)
  //   } else if (map.includes(ele.toLowerCase())) {
  //     map.splice(map.indexOf(ele.toLowerCase()), 1)
  //   }else {
  //     map.push(ele)
  //   }
    
  //   console.log(map,ele.toUpperCase());
    
  // }
  // return map.length === 0 ? '' : map.shift()
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    if (s.match(new RegExp(s[i],'gi')).length === 1) {
      return s[i]
    }
  }
  return ''
}

let str = 'moOnmen'
console.log(firstNonRepeatingLetter(str));
