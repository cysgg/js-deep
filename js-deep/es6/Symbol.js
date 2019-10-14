let a = Symbol('test')
let b = Symbol('test')
console.log(a.valueOf());
console.log(a.toString());
console.log(b.valueOf());
console.log(b.toString());
console.log(a === b);

let c = Symbol.for('ss')
let d = Symbol.for('ss')
console.log(c);
console.log(d);
console.log(Symbol.keyFor(c));
console.log(c === d);

class Double {
  static [Symbol.hasInstance] (num) {
    if (typeof num !== 'number') {
      return false
    }
    return num % 2 === 0
  }
}

console.log(4165 instanceof Double);
console.log(934 instanceof Double);

let arr1 = [1, 2]
let arr2 = [3, 4]
console.log(arr1.concat(arr2, 5))
console.log(arr2[Symbol.isConcatSpreadable])
Object.defineProperty(arr2, Symbol.isConcatSpreadable, {
  value: false,
  enumerable: false
})
console.log(arr1.concat(arr2, 5))
// 对于一个类而言 该属性必须写成实力的属性
class A {
  constructor (args) {
    this[Symbol.isConcatSpreadable] = true
  }
}
console.log( new A());

// Symbol.species 创造实例时会调用这个属性
// Symbol.match 当执行match方法时会调用这个属性
// Symbol.replace 当执行replace方法时会调用这个属性
// Symbol.search 当执行search方法时会调用这个属性
// Symbol.split 当执行split方法时会调用这个属性
// Symbol.iterator 对象的默认遍历器方法
let myiterator = {}
myiterator[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
}

console.log(...myiterator);

let obj = {
  [Symbol.toPrimitive] (hint) {
    switch (hint) {
      case 'number': return 123;
      case 'string': return 'str';
      case 'default': return 'default';
      default: throw new Error()
    }
  }
}

console.log(2 * obj);
console.log(2 + obj);
console.log('default' == obj);
console.log(String(obj))

console.log({[Symbol.toStringTag]: 'cysgg'}.toString());

console.log(Array.prototype[Symbol.unscopables]); // 使用with关键字哪些属性会被排除



