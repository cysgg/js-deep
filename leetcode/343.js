// /**
//  * @param {number} n
//  * @return {number}
//  */
// var integerBreak = function (n) {
//     var iBarr = Array.from({
//         length: n
//     }, v => -1)
//     return breakInteger(iBarr, n)
// };

// function breakInteger(a, n) {
//     if (n === 1) {
//         return 1
//     }

//     if (a[n - 1] !== -1) {
//         return a[n - 1]
//     }

//     let res = -1;
//     for (let i = 1; i < n; i++) {
//         res = Math.max(res, i * (n - i), i * breakInteger(a, n - i))
//     }
//     a[n - 1] = res

//     return res
// }

// console.log(integerBreak(10));

/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
    let intMutMaxs = Array.from({length:n},v=>1)
    for(let i = 1; i <= n; i++){
        for(let j = 1; j < i-1; j++){
            intMutMaxs[i-1] = Math.max(intMutMaxs[i-1],j*(i-j),j*intMutMaxs[i-j-1])
        }
    }
    return intMutMaxs[n-1]
};

console.log(integerBreak(11));
