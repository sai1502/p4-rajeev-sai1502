// explaination :  https://youtu.be/34WE6kwq49U

function maxProfit(prices) {
    //set maxProfit to zero, this helps for edge case that says return zero when no profit is made
    let maxProfit = 0;
    let minPrice = prices[0];
  
    for (let sell = 1; sell < prices.length; sell++) {
      let sellPrice = prices[sell];
      let profit = sellPrice - minPrice;
  
      maxProfit = Math.max(maxProfit, profit);
  
      if (sellPrice < minPrice) {
        minPrice = sellPrice;
      }
    }
    return maxProfit;
  }
  console.log(maxProfit([7, 1, 5, 3, 6, 4]));