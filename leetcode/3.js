var lengthOfLongestSubstring = function(s) {
    let maxlen = 0
    let str = ''
    for(i of s){
        index = str.indexOf(i);
        str += i
        if(index > -1){
            str = str.slice(index+1)
        }else{
            if(maxlen < str.length){
                maxlen = str.length;
            }
        }
    }
    return maxlen
};

var s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));
