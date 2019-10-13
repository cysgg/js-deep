// let obj = {
//   a: 1,
//   b: 2,
//   [Symbol(3)]: 3
// }

// Object.defineProperty(obj, 'd', {
//   enumerable: false,
//   value: 2
// })

// console.log(obj);
// console.log('obj d:', obj.d);

// let obj2 = {
//   e: 4,
//   [Symbol(6)]: 3
// }

// Object.defineProperty(obj2, 'f', {
//   enumerable: false,
//   value: 3
// })

// Object.setPrototypeOf(obj2, obj)

// console.log(obj2);
// console.log('obj2 f:', obj2.f);

// for (const key in obj2) {
//   console.log('for in', key);
// }

// console.log('object.keys(obj2):', Object.keys(obj2));
// console.log('Object.getOwnPropertyNames(obj2)', Object.getOwnPropertyNames(obj2));
// console.log('Object.getOwnPropertySymbols(obj2)', Object.getOwnPropertySymbols(obj2));
// console.log('Reflect.ownKeys(obj2):', Reflect.ownKeys(obj2));

// var o = Object.create({x: 1, y: 2})
// o.z = 3
// console.log(o);

// let { x, ...o1 } = o
// let {y, z} = o1
// console.log(x, y, z);

// let o = {
//   a: 1,
//   b: 2,
//   c: {
//     d: 3,
//     e: 4
//   }
// }

// let o1 = {
//   f: 5,
//   g: 6
// }

// o.__proto__ = o1

// let { ...opts } = o 
// let { a, b, c:{d, e}, f, g} = o
// console.log(a,b);

// console.log(opts);
// console.log(a, b, d, e, f, g);

// let a = {
//   b: {
//     c: {
//       d: 1
//     }
//   }
// }

// let test = a?.b?.c?.d || 'default'

// console.log(test);
// 只是es6提案 还没有实现
