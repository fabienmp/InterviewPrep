$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/ ready!");

    /**
     * @param {string} s
     * @return {boolean}
     */
    var isPalindrome = function (s) {

        if (s == null || s.trim().length == 0) {
            return true;
        }

        var lowerCaseS = s.toLowerCase();
        var alphaRegex = RegExp(/[^a-z0-9]/, 'gi');
        var results = lowerCaseS.replace(alphaRegex, '');
        var isPalindrome = true;

        if(results.length == 0 || results.length == 1)
        {
            return true;
        }

        for (let index = 0; index < Math.ceil((results.length - 1) / 2); index++) {
            const elementLeft = results[index];
            const elementRight = results[results.length - 1 - index];
            if (elementLeft != elementRight) {
                isPalindrome = false;
            }
        }

        return isPalindrome;
    };

    var divText = "";

    divText += " | IS-PALINDROME A man, a plan, a canal: Panama => " + isPalindrome("A man, a plan, a canal: Panama");
    divText += " | IS-PALINDROME race a car => " + isPalindrome(' ');
    $('#Pal_Str').text(divText);

});