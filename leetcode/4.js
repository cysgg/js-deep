var findMedianSortedArrays = function(nums1, nums2) {
    let nums = [...nums1,...nums2]
    nums.sort(paixu)
    return nums.length % 2 === 0 ? (nums[nums.length/2] + nums[nums.length/2 - 1]) / 2 : nums[Math.floor(nums.length/2)]
    function paixu(a,b){
        return a > b ? 1 : -1
    }
};

nums1 = [1,1,1,1,1,1,1,1,1,1,4,4]
nums2 = [1,3,4,4,4,4,4,4,4,4,4]
console.log(findMedianSortedArrays(nums1,nums2));
