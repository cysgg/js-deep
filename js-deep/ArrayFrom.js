let a = Array.from([1, , 2, , 3], (n) => (n || 0))
// a =  0 || undefined

console.log(a);
