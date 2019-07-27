/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var start = end = 0
    for(let i = 0 ; i < s.length; i++){
        let len1 = search(s,i,i)
        let len2 = search(s,i,i+1)
        
        let len = Math.max(len1,len2)
        if(len > end -start){
            start = i - Math.floor((len - 1) / 2)
            end = i + Math.floor(len / 2)
        }   
    }
    return s.slice(start,end+1) 

    function search(s,l,r){
        let left = l,
            right = r;
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
};
var s = "kyyrjtdplseovzwjkykrjwhxquwxsfsorjiumvxjhjmgeueafubtonhlerrgsgohfosqssmizcuqryqomsipovhhodpfyudtusjhonlqabhxfahfcjqxyckycstcqwxvicwkjeuboerkmjshfgiglceycmycadpnvoeaurqatesivajoqdilynbcihnidbizwkuaoegmytopzdmvvoewvhebqzskseeubnretjgnmyjwwgcooytfojeuzcuyhsznbcaiqpwcyusyyywqmmvqzvvceylnuwcbxybhqpvjumzomnabrjgcfaabqmiotlfojnyuolostmtacbwmwlqdfkbfikusuqtupdwdrjwqmuudbcvtpieiwteqbeyfyqejglmxofdjksqmzeugwvuniaxdrunyunnqpbnfbgqemvamaxuhjbyzqmhalrprhnindrkbopwbwsjeqrmyqipnqvjqzpjalqyfvaavyhytetllzupxjwozdfpmjhjlrnitnjgapzrakcqahaqetwllaaiadalmxgvpawqpgecojxfvcgxsbrldktufdrogkogbltcezflyctklpqrjymqzyzmtlssnavzcquytcskcnjzzrytsvawkavzboncxlhqfiofuohehaygxidxsofhmhzygklliovnwqbwwiiyarxtoihvjkdrzqsnmhdtdlpckuayhtfyirnhkrhbrwkdymjrjklonyggqnxhfvtkqxoicakzsxmgczpwhpkzcntkcwhkdkxvfnjbvjjoumczjyvdgkfukfuldolqnauvoyhoheoqvpwoisniv"
// console.log(s.substring(0,s.length));

console.log(longestPalindrome(s));