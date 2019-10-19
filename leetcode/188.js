/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
  let garr = []
  let max = 0
  let min = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[max]) {
      max = i
    } else {
      if(max > min) {
        garr.push(prices[max] - prices[min])
      }
      max = min = i
    }
    if (prices[i] < prices[min] ) {
      min = max = i
    }
  }
  if(max ===  prices.length-1 && max > min) {
    garr.push(prices[max] - prices[min])
  }
  let sum = 0
  console.log(garr);
  
  while(k--) {
    if (!garr.length) {
      break
    }
    let maxnum = Math.max(...garr)
    sum += maxnum
    garr.splice(garr.indexOf(maxnum), 1)
  }
  return sum
};

let arr = [1,2,4,2,5,7,2,4,9,0], k = 2
0 1 3 1 4 6 1 3 8 -1
console.log(maxProfit(k, arr))