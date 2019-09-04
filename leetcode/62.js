/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let newArr = Array.from({length:n},v=>{
        return Array.from({length:m},v=>1)
    })
    for(let i = 1; i < n; i++){
        for(let j = 1 ; j < m; j++){
            newArr[i][j] = newArr[i-1][j] + newArr[i][j-1]
        }
    }
    return newArr[n-1][m-1]
};

console.log(uniquePaths(3,2));
