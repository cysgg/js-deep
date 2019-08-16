/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stairs = Array.from({length:n},v=>-1)
    stairs[0] = 1
    stairs[1] = 2
    for(let i = 2; i < n; i++){
        stairs[i] = stairs[i-1] + stairs[i-2]
    }
    return stairs[n-1]
};

console.log(climbStairs(4));
