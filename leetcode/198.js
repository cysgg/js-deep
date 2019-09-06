/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length
    if (!len) {
        return 0
    }
    let memo = Array.from({
        length: len
    }, v => -1)
    memo[0] = nums[0]
    for (let i = 1; i < len; i++) {
        memo[i] = Math.max(memo[i], nums[i] + (i - 2 < 0 ? 0 : memo[i - 2]), (i - 1 < 0 ? 0 : memo[i - 1]))
    }
    return memo[len - 1]
};
let nums = [2, 1, 3, 4]
console.log(rob(nums));