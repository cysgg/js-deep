/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (!p) {
        return !s
    }
    let first_match = Boolean(s) && [s[0], '.'].indexOf(p[0]) > -1

    if (p.length >= 2 && p[1] == '*') {
        return (arguments.callee(s, p.substring(2)) ||
            first_match && arguments.callee(s.substring(1), p))
    } else {
        return first_match && arguments.callee(s.substring(1), p.substring(1))
    }
};

// s = "ab"
// p = "ab"
// console.log(isMatch(s, p));

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch1 = function (s, p) {
    //匹配时 s,p都减一
    //不匹配时 如果为* 拿p之前减去那个匹配 || 拿后面那个匹配
    //        否则 拿p之后那个是否为* 如果是* 再拿后面第二个匹配 匹配 s减一 p减二
    //                                                       不匹配false
    //                              否则 不陪陪false
    
};

s = "aaa"
p = "ab*a*c*a"
console.log(isMatch1(s,p));