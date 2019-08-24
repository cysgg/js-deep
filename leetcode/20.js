/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let matchObj = {
        '(': ')',
        '[':']',
        '{':'}'
    }
    
    let left = Object.keys(matchObj),
        right = Object.values(matchObj);
    if(right.includes(s[0])){
        return false
    }
    
    for(let i = 0; i < s.length; i++){
        if(left.includes(s[i])){
            stack.push(s[i])
        }else if(stack.length !== 0 && s[i] == matchObj[stack[stack.length-1]]){
            stack.pop()
        }else{
            return false
        }
    }
    return stack.length === 0 ? true : false
};

console.log(isValid('({[{}]})'));