/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let last = 0,result = 0;
  for(let i = 0; i < prices.length - 1; i++) {
    last = Math.max(0, last + prices[i+1] - prices[i])
    result = Math.max(last, result)
  }
  return result
};

let arr = [7,4,5,3,6,4]
console.log(maxProfit(arr));
