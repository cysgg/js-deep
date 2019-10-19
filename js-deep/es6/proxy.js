var handler = {
  // 拦截对象数的读取 最后一个receiver 是可选对象
  get: function (target, name, receiver) {
    if (name === 'prototype') {
      return Object.prototype
    }
    return 'Hello, ' + name + target[name]
  },
  // 拦截对象数的设置 最后一个receiver 是可选对象， 返回一个布尔值
  set: function (target, name, val, receiver) {
    console.log('set')
    target[name] = val + 1
    return true
  },
  // 拦截propKey in porxy 的操作 返回一个布尔值
  has: function (target, propKey) {
    console.log('has')
  },
  // 拦截delete proxy[propKey] 操作， 返回一个布尔值
  deleteProperty: function (target, propKey) {
    console.log('delete', target[propKey])
  },
  // 拦截Object.getOwnPropertyNames(proxy) Object.getOwnPropertySymbols(proxy) Object.keys(proxy)
  // 返回一个数组
  ownKeys: function (target) {
    console.log('ownKeys')
  },
  // 拦截Object.getOwnPropertyDescriptor(proxy, propKey) 返回属性的描述对象
  getOwnPropertyDescriptor: function (target, propKey) {
    console.log('getOwnPropertyDescriptor')
  },
  // 拦截Object.defineProperty(target, propKey, propDesc) Object.defineProperties(target, propKey, propDesc)返回一个布尔值
  defineProperty: function (target, propKey, propDesc) {
    console.log('defineProperty')
  },
  // 拦截Object.preventExtensions(proxy) 返回一个布尔值
  preventExtensions: function (target) {
    console.log('preventExtensions')
  },
  // 拦截Object.getPrototypeOf(proxy) 返回一个对象
  getPrototypeOf: function (target) {
    console.log('getPrototypeOf')
  },
  // 拦截Object.isExtensible(target) 返回一个布尔值
  isExtensible: function (target) {
    console.log('isExtensible')
  },
  // 拦截Object.setPrototypeOf(target, proto) 返回一个布尔值
  setPrototypeOf: function (target, proto) {
    console.log('setPrototypeOf')
  },
  // 拦截Proxy 实例 并将其作为一个函数调用的操作 proxy(...args) proxy.call(obj, ...args) ...
  apply: function (target, thisBinding, args) {
    return args[0];
  },
  // 拦截proxy实例作为构造函数调用的操作
  construct: function (target, args) {
    return {value: args[1]}
  }
}

var fproxy = new Proxy(function(x, y) {
  return x + y
}, handler)

console.log(fproxy(1, 2));
console.log(fproxy.a = '3');
console.log(fproxy.a);
console.log(new fproxy(1, 2));
console.log( fproxy.prototype === Object.prototype);
console.log(fproxy.foo);


