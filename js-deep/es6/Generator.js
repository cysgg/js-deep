
function wrapper (generatorFunc) {
  return function (...args) {
    let generatorObj = generatorFunc(...args)
    generatorObj.next()
    return generatorObj
  }
}

const wrapped = wrapper(function* () {
  console.log(`the first input ${yield}`)
  return 'DOWN'
})

wrapped().next('hello')

function* foo () {
  yield 1
  yield 2
  yield 3
  return 4
  yield 5
}

for (v of foo()) {
  console.log(v)
}

let it = foo()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* fibonacci (num) {
  let [pre, curr] = [0, 1]
  while(num--) {
    [pre, curr] = [curr, pre+curr]
    yield pre
  }
  yield pre
}

// function getLastFib(num) {
//   while()
//   fibonacci(num)
// }

console.log(...fibonacci(10));

function* g () {
  yield 1
  console.log('throwing an exception')
  throw new Error('fenerator broke!')
  yield 2
  yield 3
}

function log(generator) {
  var v
  console.log('starting generator');
  try {
    v = generator.next()
    console.log('第一次运行next方法', v)
  } catch (error) {
    console.log('捕捉错误', v)
  }
  try {
    v = generator.next()
    console.log('第二次运行next方法', v)
  } catch (error) {
    console.log('捕捉错误', v)
  }
  try {
    v = generator.next()
    console.log('第三次运行next方法', v)
  } catch (error) {
    console.log('捕捉错误', v)
  }
  console.log('ending generator');
}
log(g())

// Generator.prototype.throw Generator.prototype.return


function* numbers () {
  yield 1
  try {
    yield 2
    yield 3
  } finally {
    yield 4
    yield 5
  }
  yield 6
}

let g1 = numbers()

console.log(g1.next());
console.log(g1.next());
console.log(g1.return(7));
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());

function* bar () {
  yield 'a'
  yield* fooo()
  yield 'b'
}

function* fooo () {
  yield 'x'
  yield 'y'
}

console.log(...bar());

function co (gen) {
  var ctx = this
  return new Promise((resolve, reject) => {
    if (typeof gen === 'function') gen = gen.call(ctx)
    if (!gen || typeof gen.next !== 'function') return resolve(gen)

    onFulfilled()

    function onFulfilled (res) {
      var ret
      try {
        ret = gen.next(res)
      } catch (error) {
        return reject(error)
      }
      next(ret)
    }

    function onRejected (err) {
      return reject(err)
    }

    function next(ret) {
      console.log(ret)
      if (ret.done) return resolve(ret.value)
      if(ret.value && isPromise(ret.value)) {
        console.log('then', ret.value)
        ret.value.then(onFulfilled, onRejected)
      } else {
        console.log(ret.value, '------')
        onRejected (new TypeError("error"))
      }
      
    }
  })
  function isPromise(obj) {
    return typeof obj === 'object' && typeof obj.then === 'function';
  }
}

co(function* () {
  let a = yield Promise.resolve(1)
  let b = yield Promise.resolve(2)
  console.log(a + b, '=====')
  return a+b
}).then(res => {
  console.log('===', res)
}).catch(err => {
  console.log('===', err)
})