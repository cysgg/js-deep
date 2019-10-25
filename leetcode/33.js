/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let len = nums.length
  let minIndex = 0
  for (let i = 1; i < len; i++) {
    if (nums[i] < nums[i - 1]) {
      minIndex = i
      break
    }
  }
  let result = 0
  if (minIndex === 0) {
    result = bsearch(nums, 0, len - 1, target)
  } else {
    if (target >= nums[0]) {
      result = bsearch(nums, 0, minIndex - 1, target)
    } else {
      result = bsearch(nums, minIndex, len-1, target)
    }
  }
  return result
}

function bsearch (arr, low, high, val) {
  while (low <= high) {
    let mid = (low + high) >> 1
    if (arr[mid] === val) {
      return mid
    } else if (arr[mid] < val) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return -1
}

let nums = [3, 1], 
    target = 3
console.log(search(nums, target));
// console.log(nums.findIndex(val => val === target));

