/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minLen = strs[0].length
    strs.forEach((v,i)=>{
        minLen = Math.min(minLen,v.length)
    })
    console.log(minLen);
    
    let low = 0,
        high = minLen
    while(low <= high){
        let mid = (low + high) >> 1;
        if(isCommonPrefix(strs,mid)) low = mid+1
        else high = mid -1
    }
    return strs[0].slice(0,(low + high) >> 1)
};

function isCommonPrefix(strs,middle){
    const prefix = strs[0].slice(0,middle)
    for(let i = 1; i < strs.length; i++){
        if(!strs[i].startsWith(prefix)){
            return false
        }
    }
    return true
}

let strs = ["flower","flow","flight","flo","flow","flow"]
console.log(longestCommonPrefix(strs));

/**
 * @param {string[]} strs
 * @return {string}
 */
// var longestCommonPrefix1 = function(strs) {
//     let sortstrs = strs.sort()
//     console.log(sortstrs);
    
// };

// let strs = ["flower","flow","flight","flo","flow","flow"]
// longestCommonPrefix1(strs)