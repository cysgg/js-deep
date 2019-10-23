/**
 * Reflect 能够获取到语言的内部方法
 * 让Object 操作都变成函数行为 面向对象变为函数式
 * 与Proxy对象的方法一一对应， 可以在Proxy调用Reflect来恢复默认行为
 */
Reflect.get(target, name, receiver)
Reflect.set(target, name, val, receiver)
Reflect.deleteProperty(target, propKey)
Reflect.ownKeys(target)
Reflect.getOwnPropertyDescriptor(target, propKey)
Reflect.defineProperty(target, propKey, propDesc)
Reflect.preventExtensions(target)
Reflect.getPrototypeOf(target)
Reflect.isExtensible(target)
Reflect.setPrototypeOf(target, proto)
Reflect.apply(target, thisBinding, args)
Reflect.construct(target, args)