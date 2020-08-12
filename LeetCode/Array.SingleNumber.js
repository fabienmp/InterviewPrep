$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/549/ ready!");

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var singleNumber = function (nums) {
        var hashTable = {};

        for (var index = 0; index < nums.length; index++) {
            if (!hashTable[nums[index]]) {
                hashTable[nums[index]] = 1;
            } else {
                hashTable[nums[index]] += 1;
            }
        }

        let singleNum = 0;

        for (var prop in hashTable) {
            if (hashTable[prop] == 1) {
                singleNum = prop;
                break;
            }
        }

        return singleNum;

    };

    var divText = "";

    divText += " | SINGLE-NUM [2,2,1] => " + singleNumber([2,2,1]);
    divText += " | SINGLE-NUM [4,1,2,1,2] => " + singleNumber([4,1,2,1,2]);

    $('#Single_Num').text(divText);

});