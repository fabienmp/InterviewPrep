$(document).ready(function () {
    console.log("https://leetcode.com/problems/maximum-subarray/ ready!");

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var maxSubArray = function (nums) {


        if(nums.length == 1)
        {
            return nums[0];
        }
        
        var maxS = -1000000;
        var started = 0;
        var currentS = 0;
        
        for(var i = 0; i < nums.length; i++)
        {
    
            if(started == 0)
            {
                started = 1;
                currentS = 0;
            }
    
            if((currentS + nums[i]) <= 0)
            {
                started = 0;
            } 
            
            currentS += nums[i];
            maxS = Math.max(maxS, currentS);
    
        }
        
        return maxS;

        /*let started = false;
        let maxSum = Number.NEGATIVE_INFINITY;
        let previousMaxSums = Number.NEGATIVE_INFINITY;

        for (var i = 0; i < nums.length; i++) {
          
            if (maxSum <= 0) {
                started = false;
                maxSum = 0;
            }

            if (!started) {
                started = true;
                maxSum = nums[i];
            } else if (started) {
                maxSum += nums[i];
            }

            previousMaxSums = Math.max(maxSum, previousMaxSums);

        }

        return previousMaxSums;*/
    };


    var divText = "";

    divText += " | MAX-SUBARRAY [-2,1,-3,4,-1,2,1,-5,4] => " + maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);

    $('#Max_SubArray').text(divText);

});