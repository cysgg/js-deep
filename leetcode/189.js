/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  nums.splice(0, 0, ...nums.splice(nums.length - k));
  return nums
};

let arr = [1,2,3,4,5,6,7],
    k = 8;

console.log(rotate(arr, k))
