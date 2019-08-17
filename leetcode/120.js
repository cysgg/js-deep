/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    if (triangle.length == 1) {
        return triangle[0][0]
    }
    let len = triangle.length

    for (let i = 1; i < len; i++) {
        let ilen = triangle[i].length
        for(let j = 0 ; j < ilen; j++){
            triangle[i][j] = getMinValue(triangle,i,j,ilen)
        }
    }
    return Math.min(...triangle[len - 1])
};

function getMinValue(a1,i,j,ilen) {
    if(j === 0){
        return a1[i][j] + a1[i-1][j]
    }else if(j === ilen-1){
        return a1[i][j] + a1[i-1][j-1]
    }else{
        return a1[i][j] + Math.min(a1[i-1][j-1],a1[i-1][j])
    }
}


// var minimumTotal = function (triangle) {
//     if (triangle.length == 1) {
//         return triangle[0][0]
//     }
//     let len = triangle.length
//     let ts = Array.from({
//         length: len
//     }, v => [])
//     ts[0].push(triangle[0][0])

//     for (let i = 1; i < len; i++) {
//         let ilen = triangle[i].length
//         for(let j = 0 ; j < ilen; j++){
//             ts[i].push(getMinValue(triangle,ts,i,j,ilen))
//         }
//     }
//     return Math.min(...ts[len - 1])
// };
let s = [
    [-1],
    [2, 3],
    [1, -1, -3]
]
let p = [1, 2, 3, 4, 1, 2, 3, 4, 2, 5, 6, 1]
// console.log(getMinIndex(p));

console.log(minimumTotal(s));