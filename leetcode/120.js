/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let len = triangle.length
    let triangles = Array.from({
        length: len
    }, v => 0)
    triangles[0] = triangle[0][0]
    let min = Math.min(...triangle[1])
    let minIndexs = getMinIndex(triangle[1],min)
    triangles[1] = triangles[0] + min

    for (let i = 2; i < len; i++) {
        min = Math.min(...getValuesByIndex(triangle[i], minIndexs))
        triangles[i] = triangles[i - 1] + min
        minIndexs = getMinIndex(triangles[i],min)
    }
    return triangles[len - 1]
};

function getValuesByIndex(arr1, arr2) {
    let arr3 = arr2.map(v => v + 1).concat(arr2).reduce((p, v) => {
        !p.includes(v) && p.push(v)
        return p
    }, [])
    let len = arr3.length
    return Array.from(arr3, v => arr1[v])
}

function getMinIndex(arr,min) {
    return arr.reduce((p, v, i) => {
        v === min && p.push(i)
        return p
    }, [])
}



let s = [
    [-1],
    [2, 3],
    [1, -1, -3]
]
let p = [1, 2, 3, 4, 1, 2, 3, 4, 2, 5, 6, 1]
console.log(getMinIndex(p));

console.log(minimumTotal(s));