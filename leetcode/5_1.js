/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    maxrestr = ''
    for(i in s){
        search(s,s[i],0,i)
    }
    function search(s,char,startnum,maxnum) {
        startnum = s.indexOf(char,startnum)
        if(startnum < 0 || startnum > maxnum){
            return;
        }
        cutstr = s.slice(startnum,Number(maxnum)+1)
        if(isrestr(cutstr)){
            if(maxrestr.length < cutstr.length){
                maxrestr = cutstr
                return;
            }
        }
        return arguments.callee(s,char,startnum+1,maxnum)
    }
    function isrestr(str) {
        for(i in str){
            if(str[i] !== str[str.length - i -1])
                return false
        }
        return true
    }
    
    return maxrestr;
};

var s = "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
// console.log(s.substring(0,s.length));

console.log(longestPalindrome(s));