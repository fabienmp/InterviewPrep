$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/ ready!");

    /**
     * @param {string} s
     * @return {number}
     */
    var firstUniqChar = function (s) {

        var hashTable = {};

        for (let index = 0; index < s.length; index++) {
            const element = s[index];
            if (!hashTable[element]) {
                hashTable[element] = 1;
            } else {
                hashTable[element] += 1;
            }
        }

        let firstUniqueIndex = -1;

        for (let index = 0; index < s.length; index++) {
            const element = s[index];

            if (hashTable[element] == 1) {
                firstUniqueIndex = index;
                break;
            }
        }

        return firstUniqueIndex;

    };

    var divText = "";

    divText += " | FIRST-UNIQUE loveleetcode => " + firstUniqChar('loveleetcode');
    divText += " | FIRST-UNIQUE leetcode => " + firstUniqChar('leetcode');
    
    $('#First_Unique').text(divText);

});