/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let sqlens = Array.from({length:n+1},(v,i)=>i)
    for(let i = 1; i <= n; i++){
        for(let j = 1; j * j <= i; j++){
            sqlens[i] = Math.min(sqlens[i],sqlens[i-j*j]+1)
        }
    }
    return sqlens[n];
};

console.log(numSquares(13));
