/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if(!p){
        return !s
    }
    let first_match = Boolean(s) && [s[0],'.'].indexOf(p[0]) > -1

        if(p.length >= 2 && p[1] == '*'){
            return (arguments.callee(s, p.substring(2)) ||
            first_match && arguments.callee(s.substring(1), p))
        }
        else{
            return first_match && arguments.callee(s.substring(1), p.substring(1))
        }
            

    
};

s = "mississippi"
p = "mis*is*ip*."
console.log(isMatch(s, p));