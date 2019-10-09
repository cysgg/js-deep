function fn1 (a) {}
function fn2 (a, b, c = 5) {}
function fn3 (a = 5, b, c) {}
function fn4 (...args) {}

console.log(fn1.length);
console.log(fn2.length);
console.log(fn3.length);
console.log(fn4.length);

