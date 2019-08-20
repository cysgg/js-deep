/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    let len = s.length
    dp = Array.from({length:len},v=>1)
    console.log(dp);
    for(let i = 2; i <= len; i++){
        const one = s.slice(i-1,i)
        const two = s.slice(i-2,i)

        if(one != 0){
            dp[i] += dp[i-1]
        }
        if(two >= 10 && two <= 26){
            dp[i] = dp[i-2]
        }
    }
    return dp[len-1]
};


console.log(numDecodings('14'));

