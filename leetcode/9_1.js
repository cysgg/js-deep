/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if(x<0){
        return false
    }else{
        a(x,0)
    }
    function a(b,c){
        d = b
        e = b%10 + c * 10
        console.log(d,e);
        
        if(e > d){
            return false
        }else if(e === d){
            return true
        }else{
            return arguments.callee(Math.floor(d/10),e)
        }
        
    }
};
let x = 12
console.log(isPalindrome(x));