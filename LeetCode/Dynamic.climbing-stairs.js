$(document).ready(function () {
    console.log("https://leetcode.com/problems/climbing-stairs/ ready!");

    /**
     * @param {number} n
     * @return {number}
     */
    var generateAllCombinations = function (initArray, k) {


        for (let index = 0; index <= k; index++) {
            generateAllCombinations_internal(initArray, k, [initArray[index]], index + 1)
        }

    }

    var generateAllCombinations_internal = function (initArray, k, data, start) {

        if (data.length == k) {
            console.log(data);
            return;
        }

        for (let index = start; index < initArray.length; index++) {
            var temp = data.slice();
            temp.push(initArray[index])
            generateAllCombinations_internal(initArray, k, temp, index + 1);
        }

    }


    var generateAllPermutations = function (dataArray, l, r) {
        for (let index = l; index < r; index++) {
            var newArray = permuteArrayElements(array, l, i)
            generateAllPermutations(newArray);
        }
    }

    var permuteArrayElements = function (array, index1, index2) {
        var tempArray = array.slice();

        var tempElement = tempArray[index1];
        tempArray[index1] = tempArray[index2];
        tempArray[index2] = tempElement;

        return tempArray;

    }

    /**
     * @param {number} n
     * @return {number}
     */
    var climbStairs = function (n) {

        if (n == 0) {
            return 0;
        }

        if (n == 1) {
            return 1;
        }

        var data = [];

        data[0] = 1;
        data[1] = 1;

        for (var index = 2; index <= n; index++) {
            data[index] = data[index - 1] + data[index - 2]
        }

        return data[n];

    }

    var divText = "";

    divText += " | CLIMBING-STAIRS 8 => " + climbStairs(8);

    $('#Climbing_stairs').text(divText);


});