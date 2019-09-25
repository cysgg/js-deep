/**
 * 
 * @param {Array} arr 
 */
function pickPeaks(arr){
  let pp = {
    pos: [],
    peaks: []
  }
  let maxObj = {
    index: 0,
    value: 0,
    hasRes: false,
  }
  let len = arr.length
  for(let i = 1; i < len; i++){
    if(arr[i] > maxObj.value){
      maxObj.value = arr[i]
      maxObj.index = i
      maxObj.hasRes = true
    }else if (arr[i] < maxObj.value) {
      if(maxObj.hasRes) {
        pp.pos.push(maxObj.index)
        pp.peaks.push(maxObj.value)
      }
      maxObj.hasRes = false
      maxObj.value = arr[i]
    }
  }
  return pp
}

let p = [1,2,3,4,1,3,2,1]
console.log(pickPeaks(p));
