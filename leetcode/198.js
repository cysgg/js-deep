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
    memo.push(0, 0, 0)
    memo[len - 1] = nums[len - 1]
    for (let i = len - 2; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            memo[i] = Math.max(memo[i], nums[j] + memo[j + 2])
        }

    }
    return memo[0]
};
let nums = [1, 2, 3, 1]
console.log(rob(nums));