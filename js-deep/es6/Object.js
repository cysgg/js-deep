let obj = {
  a: 1,
  b: 2,
  [Symbol(3)]: 3
}

Object.defineProperty(obj, 'd', {
  enumerable: false,
  value: 2
})

console.log(obj);
console.log('obj d:', obj.d);

let obj2 = {
  e: 4,
  [Symbol(6)]: 3
}

Object.defineProperty(obj2, 'f', {
  enumerable: false,
  value: 3
})

Object.setPrototypeOf(obj2, obj)

console.log(obj2);
console.log('obj2 f:', obj2.f);

for (const key in obj2) {
  console.log('for in', key);
}

console.log('object.keys(obj2):', Object.keys(obj2));
console.log('Object.getOwnPropertyNames(obj2)', Object.getOwnPropertyNames(obj2));
console.log('Object.getOwnPropertySymbols(obj2)', Object.getOwnPropertySymbols(obj2));
console.log('Reflect.ownKeys(obj2):', Reflect.ownKeys(obj2));

