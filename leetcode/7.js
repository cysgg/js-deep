/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    num = x >= 0 ?
        num =  parseInt(x.toString().split('').reverse().join('')) :
        num =  -parseInt(Math.abs(x).toString().split('').reverse().join(''));
    return num > 2147483647 || num < - 2147483648 ? 0 : num
};

let s = -534236469
console.log(Math.pow(2,31));


