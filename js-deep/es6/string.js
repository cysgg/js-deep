let s = String.fromCharCode(0x20BB7)
console.log(s);

console.log('吉祥'.charAt(0));
console.log('x'.padStart(5, 'ab'));
console.log('x'.padEnd(4,'ab'));
console.log('25'.padStart(10,'YYYY-MM-DD'));

let a = 5,
    b = 10;

console.log`${a}${b}a b`
console.log`a b${a + b}${b}`
console.log`hello ${a + b} world ${a * b}`
console.log`hello world ${a + b} ${a * b}`
console.log`hello world ${a + b}`
