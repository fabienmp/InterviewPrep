$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/ ready!");

    /**
     * @param {number[]} nums
     * @return {number}
     */
    var removeDuplicates = function (nums) {

        if (nums === undefined || nums == null || nums.length == 0) {
            return 0;
        }

        let lastUnique = 0;

        for (var index = 0; index < nums.length - 1; index++) {
            if (nums[index] != nums[index + 1]) {
                nums[lastUnique + 1] = nums[index + 1];
                lastUnique++;
            }
        }

        return lastUnique + 1;

    };

    var divText = "";

    divText += " | REMOVE-DUPS [1,1,2] => " + removeDuplicates([1,1,2]);
    divText += " | REMOVE-DUPS [0,0,1,1,1,2,2,3,3,4] => " + removeDuplicates([0,0,1,1,1,2,2,3,3,4]);

    $('#Remove_Dup').text(divText);

});