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
