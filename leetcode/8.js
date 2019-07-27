/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let num = parseInt(str.trim());
    let min_num = Math.pow(-2,31);
    let max_num = Math.pow(2,31) - 1;
    if(Number.isNaN(num)){
        return 0
    }
    else if(num < min_num){
        return min_num
    }
    else if(num > max_num){
        return max_num
    }else{
        return num
    }
};

let s = "   -42"
console.log(myAtoi(s));
