$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/ ready!");

    /**
     * @param {number} x
     * @return {number}
     */
    var reverseInt = function (x) {

        if (x == null || isNaN(x)) {
            return 0;
        }

        let isNeg = x < 0;
        let strX = Math.abs(x).toString();
        var retStr = '';

        for (var i = strX.length - 1; i >= 0; i--) {
            retStr += strX[i];
        }

        let convertedInt = parseInt(retStr);
        let overFlow = (convertedInt >> 0 != convertedInt)

        if (overFlow)
            return 0;

        if (isNeg)
            return '-' + retStr;

        return retStr;

    };

    var divText = "";

    divText += " | REV-INT -45238 => " + reverseInt(-45238);
    divText += " | REV-INT 1534236469 => " + reverseInt(1534236469);
    $('#Rev_Int').text(divText);

});