$(document).ready(function () {
    console.log("Recursion ready!");

    window.onerror = function (msg, url, lineNo) {
        $('#errorDiv').text(msg);
        return false;
    }

    function findFactorialRecursive(number) {

        if (number == 1)
            return 1;

        var answer = number * findFactorialRecursive(number - 1);
        return answer;
    }

    function findFactorialIterative(number) {
        var answer = 1;
        for (var index = 1; index <= number; index++) {
            answer *= index;
        }
        return answer;
    }

    var answerRecursion = findFactorialRecursive(5);
    var answerIteration = findFactorialIterative(5);

    $('#recursionFactorialDiv').text('RECUSION FACTORIAL 5:' + answerRecursion +
        " ITERATION FACTIORAL 5:" + answerIteration
    );

    // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
    // the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

    //For example: fibonacciRecursive(6) should return 8

    answerRecursion = fibonacciRecursive(7);
    answerIteration = fibonacciIterative(7);

    function fibonacciIterative(n) {

        var series = [];
        series[0] = 0;
        series[1] = 1;

        for (var topI = 2; topI <= n; topI++) {
            series[topI] = series[topI - 1] + series[topI - 2];
        }

        return series[n];

    }

    function fibonacciRecursive(n) {
        if (n == 0)
            return 0;

        if (n == 1)
            return 1;

        return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)

    }

    $('#recursionFibolDiv').text('RECUSION FIB 7:' + answerRecursion +
        " RECUSION FIB 7:" + answerIteration
    );

    //Implement a function that reverses a string using iteration...and then recursion!
    function reverseString(str) {

        if (str.length == 1)
            return str;

        var remainingStr = str.substring(1, str.length);
        return reverseString(remainingStr) + str[0];

    }

    answerRecursion = reverseString('yoyo mastery')
    //should return: 'yretsam oyoy'
    $('#recursionStringReverseDiv').text('STRING REV yoyo mastery:' + answerRecursion);

});