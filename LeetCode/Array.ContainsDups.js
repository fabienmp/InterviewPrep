$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/ ready!");

    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    var containsDuplicate = function (nums) {
        var hashTable = {};

        for (var index = 0; index < nums.length; index++) 
        {
            if(!hashTable[nums[index]])
            {
                hashTable[nums[index]] = 1;
            }
            else
            {
                hashTable[nums[index]] += 1;
            }
        }

        let totalDups = 0;

        for(var prop in hashTable)
        {
            if(hashTable[prop] > 1)
            {
                totalDups += 1;
            }
        }

        return totalDups >= 1;

    };

    var divText = "";

    divText += " | CONTAINS-DUPS [1,2,3,1] => " + containsDuplicate([1, 1, 2]);
    divText += " | CONTAINS-DUPS [1,11,15,31,3,4,32,24,48,2] => " + containsDuplicate([1,11,15,31,3,4,32,24,48,2]);

    $('#Contains_Dup').text(divText);

});