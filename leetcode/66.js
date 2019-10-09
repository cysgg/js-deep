/**
 * 
 * @param {Array.<Number>} numbers 
 */
function add1(numbers) {
  let overValue = 1
  let lastI = numbers.length - 1
  for (let i = lastI; i >= 0; i--) {
    let sum = numbers[i] + overValue
    numbers[i] = sum % 10
    if (sum >= 10) {
      overValue = 1
    } else {
      overValue = 0
    }
    if (overValue === 0) {
      return numbers
    }
  }
  if (overValue === 1) {
    numbers.unshift(1)
  }
  return numbers
}

let nums = [9, 9]
console.log(add1(nums));
