$(document).ready(function () {
    console.log("https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/882/ ready!");

    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    var isAnagram = function (s, t) {

        // This one does not finish because of splice - making the loop quadratic.
        /*let isAnagram = true;
        let tArray = t.split('');

        for (let index = 0; index < s.split('').length; index++) {
            const element = s[index];

            if (tArray.indexOf(element) > -1) {
                tArray.splice(tArray.indexOf(element), 1);
            } else {
                isAnagram = false;
                break;
            }
        }

        if (tArray.length > 0) {
            isAnagram = false;
        }

        return isAnagram;*/

        let isAnagram = true;
        let proposedAnagramArray = t.split('');
        let wordArray = s.split('');

        let proposedAnagramHashTable = {};
        let wordHashTable = {};

        for (let index = 0; index < wordArray.length; index++) {
            const element = wordArray[index];

            if (!wordHashTable[element]) {
                wordHashTable[element] = 1;
            } else {
                wordHashTable[element] += 1;
            }

        }

        for (let index = 0; index < proposedAnagramArray.length; index++) {

            const element = proposedAnagramArray[index];

            if (!proposedAnagramHashTable[element]) {
                proposedAnagramHashTable[element] = 1;
            } else {
                proposedAnagramHashTable[element] += 1;
            }
        }

        for (var prop in proposedAnagramHashTable) {

            if (!wordHashTable[prop] || wordHashTable[prop] != proposedAnagramHashTable[prop]) {
                isAnagram = false;
                break;
            }

        }

        if (isAnagram) {
            for (var prop in wordHashTable) {

                if (!proposedAnagramHashTable[prop] || wordHashTable[prop] != proposedAnagramHashTable[prop]) {
                    isAnagram = false;
                    break;
                }

            }
        }


        return isAnagram;

    };

    var divText = "";

    divText += " | IS-ANAGRAM anagram,nagaram => " + isAnagram('anagram', 'nagaram');
    divText += " | IS-ANAGRAM rat,car => " + isAnagram('ab', 'a');
    $('#Is_Anagram').text(divText);

});