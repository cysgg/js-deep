/**
 * 
 * @param {Array} arr 
 */
function findEvenIndex(arr) {
    //Code goes here!
    return arr.findIndex((v, i, arr1) => arr1.slice(0, i).reduce((p, c) => p + c,0) == arr1.slice(i + 1).reduce((p, c) => p + c,0))
}
let a = [1, 2, 3, 4, 3, 2, 1]

console.log(findEvenIndex(a));