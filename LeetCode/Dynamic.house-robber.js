$(document).ready(function () {
    console.log("https://leetcode.com/problems/house-robber/ ready!");

    /**
     * @param {number[]} nums
     * @return {number}
     */

    // MY ATTEMPT - FAILED 
    /*var rob = function (nums) {

        if (nums == null || nums.length == 0) {
            return 0;
        }

        let reverseHash = {};

        for (var index = 0; index < nums.length; index++) {
            if (!reverseHash[nums[index]]) {
                reverseHash[nums[index]] = [];
            }
            reverseHash[nums[index]].push(index);
        }

        let sortedNums = nums.sort(function (a, b) {
            return b - a
        });

        let total = 0;
        let usedIndexes = [];
        while (sortedNums.length > 0) {
            var element = sortedNums.shift();
            var elementIndex = reverseHash[element].shift();

            if (usedIndexes.indexOf(elementIndex + 1) == -1 &&
                usedIndexes.indexOf(elementIndex - 1) == -1) {
                total += element;
                usedIndexes.push(elementIndex);
            }
        }

        return total;
    };*/

    // Always calculate the sum thus far at index i to find pattern (Dynamic Programming)
    var rob = function (nums) {

        if(nums.length == 0)
        {
            return 0;
        }
        
        if(nums.length == 1)
        {
            return nums[0];
        }
        
        if(nums.length == 2)
        {
            return Math.max(nums[0], nums[1]);
        }
        
        let sums = [];
        
        sums[0] = nums[0];
        sums[1] = Math.max(nums[0], nums[1]);
        
        for(var i = 2; i < nums.length; i++)
        {
            sums[i] = Math.max((sums[i-2] + nums[i]), sums[i-1]);
        }
        
        return sums[nums.length - 1];


        /*if (nums == null || nums.length == 0) {
            return 0;
        } else if (nums.length == 1) {
            return nums[0];
        }

        let sum = 0;
        let runningTotals = [];
        runningTotals[0] = nums[0];
        runningTotals[1] = Math.max(nums[0], nums[1]);

        for (var i = 2; i < nums.length; i++) {
            runningTotals[i] = Math.max(runningTotals[i - 2] + nums[i], runningTotals[i - 1]);
        }

        return Math.max(runningTotals[nums.length-1]);*/

    }



    var divText = "";

    divText += " | ROB [1,2,3,1] => " + rob([2, 3, 2]);

    $('#Dynamic_house-robber').text(divText);

});