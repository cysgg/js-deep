/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    numsobj = {}
    for(let i = 0; i < numRows; i++){
        numsobj[i] = []
    }
    console.log(numsobj);
    
    let currnum = 0
    let isdown = true
    let maxend = numRows-1
    for(let i = 0; i < s.length; i++){
        numsobj[currnum].push(s[i])
        if(numRows > 1){
            if(isdown){
                currnum ++
            }else{
                currnum --
            }
        }
        if(currnum <= 0 || currnum >= maxend){
            isdown = !isdown
        }
    }
    let newstr = ''
    for(let i = 0; i< numRows; i++){
        newstr += numsobj[i].join('')
    }
    return newstr
}
let s = "AB"
let numRows = 1
console.log(convert(s,numRows));
