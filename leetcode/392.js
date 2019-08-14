/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let si = s.length,
        ti = t.length;
    while (si >= 0 && ti >= 0) {
        if (t[ti] === s[si]) {
            si--;
            ti--;
        } else {
            ti--
        }
    }
    return si < 0
};

let s = "axc",
    t = "ahbgdc";

console.log(isSubsequence(s, t));