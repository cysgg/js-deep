/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let i =0,
        j = height.length-1,
        maxarea = 0
    while(i != j){
        maxarea = Math.max(Math.min(height[i],height[j]) * (j-i),maxarea)
        height[i] > height[j] ? j-- : i++
    }
    return maxarea
};

arr = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(arr));
