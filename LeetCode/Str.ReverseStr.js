$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/ ready!");

    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    var reverseStr = function (s) {

        let isEven = (s.length % 2 == 0);

        for (var i = 0; i < Math.ceil(s.length / 2); i++) {
            var temp = s[i];
            s[i] = s[s.length - i - 1];
            s[s.length - i - 1] = temp;
        }

        return s;

    };

    var divText = "";

    divText += " | REV-STR hello => " + reverseStr(["h", "e", "l", "l", "o"]);
    divText += " | REV-STR Hannah => " + reverseStr(["H", "a", "n", "n", "a", "h"]);
    $('#Rev_Str').text(divText);

});