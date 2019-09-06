/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let n = nums.length
    if (!n) {
        return 0
    } else if (n == 1) {
        return nums[0]
    } else if (n == 2) {
        return Math.max(nums[0], nums[1])
    }else{
        return Math.max(rob1(nums.slice(1)), rob1(nums.slice(0, n - 1)))
    }
};

function rob1(nums) {
    let n = nums.length
    if (!n) return 0
    let dp_i_1 = nums[0] // 偷了
    let dp_pre_0 = 0 // i 被偷了以后，i + 2 才能被偷
    for (let i = 1; i < n; i++) {
        let temp = dp_i_1
        dp_i_1 = Math.max(dp_i_1, dp_pre_0 + nums[i])
        dp_pre_0 = temp
    }
    return dp_i_1
}
let nums = [2, 1, 3, 4]
console.log(rob(nums));