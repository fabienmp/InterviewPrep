$(document).ready(function () {
    console.log("https://leetcode.com/problems/best-time-to-buy-and-sell-stock/ ready!");

    /**
     * @param {number[]} prices
     * @return {number}
     */
    // BRUTE FORCE - TIME O(n^2)
    var maxProfit = function (prices) {

        let max = 0;

        for (var i = 0; i < prices.length; i++) {
            for (var j = 0; j < prices.length; j++) {
                if (i < j) {
                    max = Math.max(max, -prices[i] + prices[j]);
                }
            }
        }

        return max;

    };

     // ONE PASS - TIME O(n^2)
    var maxProfitLight = function (prices) {

        let maxSum = 0;
        let minPrice = Number.MAX_VALUE;
        
        for (var i = 0; i < prices.length; i++) {

            if (prices[i] < minPrice) {
                minPrice = prices[i];
            }

            if (prices[i] > minPrice) {
                maxSum = Math.max(-minPrice + prices[i], maxSum);
            }

        }

        return maxSum;

    };

    var divText = "";

    divText += " | MAX PROFIT [7,1,5,3,6,4] => " + maxProfitLight([7, 1, 5, 3, 6, 4]);

    $('#Dynamic_max_profit').text(divText);

});