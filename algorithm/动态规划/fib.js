function Vector() {
    
}

Vector.prototype.add = function(key,value){
    this[key] = value
}


Vector.prototype.get = function(key){
    return this[key]
}


Vector.prototype.has = function(key){
    return key in this
}

// let vector = new Vector()
// function fib(n) {
//     if (n === 0) {
//         return 0
//     } else if (n === 1) {
//         return 1
//     }
//     if(!vector.has(n)){
//         vector.add(n,fib(n - 1) + fib(n - 2))
//     }
//     return vector.get(n)
// }


// function fib(n) {
//     if (n === 0) {
//         return 0
//     } else if (n === 1) {
//         return 1
//     }
//    return fib(n - 1) + fib(n - 2)
// }


function fib(n){
    let vector = new Vector()
    vector[0] = 0;
    vector[1] = 1;
    for(let i = 2; i <= n; i++){
        vector[i] = vector[i-1] + vector[i-2]
    }
    return vector[n]
}

console.log(fib(100));